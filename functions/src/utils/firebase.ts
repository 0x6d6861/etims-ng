import admin from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/auth';

const storage = admin.storage();
const firestore = admin.firestore();

const uploadInvoice = async (file: Express.Multer.File, user: DecodedIdToken, extra?: {[key: string]: any}) => {

    const bucket = storage.bucket();

    const filePath = `${user.uid}/${file.filename}`;

    const blob = bucket.file(filePath);

    const blobStream = blob.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        },
    });

    blobStream.on('error', (err) => {
        console.error('Error uploading file:', err);
    });

    blobStream.on('finish', () => {
        console.log('File uploaded successfully.');
    });

    blobStream.end(file.buffer);

    const invoiceRef = firestore.collection('invoices').doc();
    await invoiceRef.set({
        name: file.filename,
        url: `gs://${bucket.name}/${filePath}`,
        userId: user.uid,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        ...extra
    });

    return invoiceRef.id;
}


export { uploadInvoice };
