import express, { Express, NextFunction, Request, Response } from "express";
import multer from 'multer';
import admin from 'firebase-admin';
import { extractPinAndSignature, getJSONData, parsePDF } from "./utils/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 10MB


admin.initializeApp();

const app: Express = express();
const upload = multer({ storage: multer.memoryStorage() });

const isLoggedIn = async (req: Request, res: Response, next: () => void) => {
  const token = req.headers.authorization;
    if (!token) {
    return res.status(401).send({
        error: 'Unauthorized',
    });
  }

  admin.auth().verifyIdToken(token).then((decodedToken) => {
    req.user = decodedToken;
    next();
  }).catch((error) => {
    res.status(401).send({
        error: 'Unauthorized',
    });
  });

};

const isPdf = (req: Request, res: Response, next: NextFunction) => {
    if (req.file?.mimetype !== 'application/pdf') {
        return res.status(400).send('Invalid file type. Only PDF files are allowed.');
    }
    if (req.file?.size > MAX_FILE_SIZE) {
        return res.status(400).send(`File size too large. Maximum allowed size is 5MB.`);
    }
    return next();
}

app.use(isLoggedIn)


app.post('/upload', upload.single('file'), isPdf, async(req: Request, res: Response) => {
  
if (!req.file) {
    return res.status(400).send('No file uploaded.');
}

  const invoiceFile = req.file;
  const response = await parsePDF(invoiceFile);
  const result = extractPinAndSignature(response);

  const etims = await getJSONData({
    pin: result?.pins?.[0]!,
    signature: result?.signature!
  })

  // TODO: save file and upload

  return res.json(etims);

});

export default app;