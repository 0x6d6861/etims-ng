import {JSDOM} from "jsdom";
import pdf from "pdf-parse";

export const extractPinAndSignature = (rawText: string): {
  pins: string[],
  signature: string,
  text: string
} | null => {
  const text = rawText
    .replaceAll("-\n", "-")
    .replaceAll("-", "")
    .replaceAll("ReceiptSignature", "Receipt Signature")
    .replaceAll(" : ", ": ");

  // console.log('LOG => ', text)

  // Define regular expressions to capture Receipt Signature and PINs
  const signatureRegex = /Receipt\s*Signature\s*:\s*([A-Z0-9-]{16})/i;
  const pinRegex = /PIN\s*:\s*([A-Z][0-9]{9}[A-Z])/gi;

  // Extract Receipt Signature
  const signatureMatch = text.match(signatureRegex);
  let signature = "";
  if (signatureMatch) {
    signature = signatureMatch[1];
  }

  // Extract all PINs
  let pins = [];
  let match;
  while ((match = pinRegex.exec(text)) !== null) {
    pins.push(match[1]);
  }

  if (rawText.indexOf("Powered by eTIMS") > 0) {
    pins = [pins?.[1], pins?.[0]];
  }

  return {
    signature: signature,
    pins: pins,
    text: text,
  };
};

export const parsePDF = async (file: Express.Multer.File) => {
  const rawFile = file.buffer;
  return pdf(rawFile).then((res: {text: string}) => res.text);
};

export const getHTMLContent = async (url: string) => {
  const response = await fetch(url);
  const html = await response.text();
  if (html.indexOf("INTERNAL SERVER ERROR") > 0) {
    throw new Error("Invalid request");
  }
  return html.trim();
};

function parseHTMLtoJSON(htmlContent: string) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  const result: {[key: string]: any} = {};

  // Extracting the top info details
  const topInfo = document.querySelector(".topinfo.detail");


  if (topInfo) {
    result.customerDetails = {
      name: topInfo?.children?.[0]?.textContent?.trim(),
      pin: topInfo?.children?.[1]?.textContent?.split(": ")?.[1]?.trim(),
      invoiceNumber: topInfo?.children?.[2]?.textContent?.split(": ")?.[1]?.trim(),
      // address: topInfo?.children?.[1]?.textContent?.trim(),
      // telephone: topInfo?.children?.[2]?.textContent?.split(': ')?.[1]?.trim(),
      // email: topInfo?.children?.[3]?.textContent?.split(': ')?.[1]?.trim(),
      // pin: topInfo?.children?.[4]?.textContent?.split(': ')?.[1]?.trim(),
      // invoiceNumber: topInfo?.children?.[5]?.textContent?.split(': ')?.[1]?.trim()
    };
  }

  // Extracting buylist sections
  const buylistSections = document.querySelectorAll(".buylist-section");
  result.items = Array.from(buylistSections).map((section) => {
    return {
      clientPin: section?.children?.[0]?.textContent?.split(": ")?.[1]?.trim(),
      clientName: section?.children?.[1]?.textContent?.split(": ")?.[1]?.trim(),
      description: section?.children?.[2]?.textContent?.trim(),
      code: section?.children?.[3]?.textContent?.trim(),
      unitPrice: parseFloat(section?.children?.[4]?.textContent?.split(" ")?.[0]?.trim() as string),
      quantity: parseInt(section?.children?.[4]?.querySelector("span")?.textContent?.split("x ")?.[1]?.trim() as string),
      total: parseFloat(section?.children?.[5]?.textContent?.split(" ")?.[0]?.replace(/,/g, "")?.trim() as string),
      tax: section.children?.[5]?.textContent?.split(" ")?.[2]?.trim(),
    };
  });

  // Extracting total details
  const totalDetails = document.querySelectorAll(".total-detail");
  result.totals = Array.from(totalDetails).map((detail) => {
    const entries = detail.children;
    return Array.from(entries).map((entry) => {
      return {
        title: entry?.querySelector(".tit.lt")?.textContent?.replace(":", "")?.trim() || "",
        value: parseFloat(entry?.querySelector(".value.rt")?.textContent?.replace(/,/g, "").trim() as string) || 0,
      };
    }).reduce((acc, item) => {
      if (item.title && item.value) {
        // @ts-ignore
        acc[item.title] = item.value;
      }
      return acc;
    }, {});
  }).reduce((acc, item) => {
    return {...acc, ...item};
  }, {});

  // Extracting SCU information
  const scuInfo = document.querySelector(".total-detail.sdc");
  if (scuInfo) {
    const scuDetails = scuInfo.querySelectorAll(".block-type");
    result.scuInfo = Array.from(scuDetails).map((detail) => {
      return {
        title: detail?.querySelector(".tit.lt")?.textContent?.replace(":", "")?.trim() || "",
        value: detail?.querySelector(".value.lt")?.textContent?.trim() || "",
      };
    }).reduce((acc, item) => {
      if (item.title && item.value) {
        // @ts-ignore
        acc[item?.title] = item.value;
      }
      return acc;
    }, {} as {[key: string]: any});
  }

  return result;
}


export const getJSONData = async (
  {
    pin,
    signature,
  }:{
    pin: string,
    signature: string
  }) => {
  const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=${pin}00${signature}`;
  console.log("URL => ", url);
  const htmlContent = await getHTMLContent(url);
  return parseHTMLtoJSON(htmlContent);
};
