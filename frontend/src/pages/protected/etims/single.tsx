// @ts-ignore
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
// @ts-ignore
import { saveAs } from "file-saver";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import NewExportModal from "@/components/export/NewExportModal";
import { FileUp } from "lucide-react";
import { invoiceData } from "@/components/export/elements/type";

const generatePDF = () => {
  const doc = new jsPDF();
  doc.text("Invoice", 20, 20);
  doc.text(`Customer: ${invoiceData.customerDetails.name}`, 20, 30);
  doc.text(`PIN: ${invoiceData.customerDetails.pin}`, 20, 40);
  doc.text(
    `Invoice Number: ${invoiceData.customerDetails.invoiceNumber}`,
    20,
    50
  );

  const y = 60;
  invoiceData.items.forEach((item, index) => {
    doc.text(
      `${item.description} - Quantity: ${item.quantity} - Unit Price: $${item.unitPrice} - Total: $${item.total}`,
      20,
      y + index * 10
    );
  });

  doc.text(
    `Total: $${invoiceData.totals.TOTAL}`,
    20,
    y + invoiceData.items.length * 10 + 10
  );
  doc.save("invoice.pdf");
};

// @ts-ignore
const generateExcel = () => {
  const worksheetData = [
    [
      "Vendor Name",
      "Date",
      "Purchase Order Number",
      "Item",
      "Description",
      "Quantity",
      "Rate",
      "Amount",
      "Customer",
      "Class",
      "Other",
    ],
    ...invoiceData.items.map((item) => [
      invoiceData.customerDetails.name,
      invoiceData.scuInfo.Date.split(" ")[0],
      invoiceData.customerDetails.invoiceNumber,
      item.code,
      item.description,
      item.quantity,
      item.unitPrice,
      item.total,
      item.clientName,
      "", // Assuming no class is provided
      "", // Assuming no other notes are provided
    ]),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "PurchaseOrders");

  const workbookOut = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  saveAs(
    new Blob([workbookOut], { type: "application/octet-stream" }),
    "purchase_orders.xlsx"
  );
};
// @ts-ignore
const generateSalesOrderExcel = () => {
  const worksheetData = [
    [
      "Customer Name",
      "Date",
      "Sales Order Number",
      "Item",
      "Description",
      "Quantity",
      "Rate",
      "Amount",
      "Sales Rep",
      "Class",
      "Other",
    ],
    ...invoiceData.items.map((item) => [
      invoiceData.customerDetails.name,
      invoiceData.scuInfo.Date.split(" ")[0],
      invoiceData.customerDetails.invoiceNumber,
      item.code,
      item.description,
      item.quantity,
      item.unitPrice,
      item.total,
      "", // Assuming no sales rep is provided
      "", // Assuming no class is provided
      "", // Assuming no other notes are provided
    ]),
  ];

  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "SalesOrders");

  const workbookOut = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  saveAs(
    new Blob([workbookOut], { type: "application/octet-stream" }),
    "sales_orders.xlsx"
  );
};

function single() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="mt-6 space-x-2">
          <NewExportModal>
            <Button>
              <span>Export</span>
              <FileUp className="ml-2 w-4 h-4" />
            </Button>
          </NewExportModal>
          <Button variant={"outline"} onClick={generatePDF}>
            Download PDF
          </Button>
        </div>

        <Card className="p-14 flex flex-col min-h-[890px] rounded-2xl">
          <CardHeader className="">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {invoiceData.customerDetails.invoiceNumber}
                </h2>
                <h3 className="mb-4 uppercase text-sm">
                  {invoiceData.scuInfo.Date.split(" ")[0]}
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm">Billed to</p>
                  <h3 className="text-lg font-bold">
                    {invoiceData.customerDetails.name}
                  </h3>
                  <h4 className="uppercase text-sm">
                    {invoiceData.customerDetails.pin}
                  </h4>
                </div>
              </div>
              <div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <QRCodeSVG value="https://reactjs.org/" />
                </div>
              </div>
            </div>
          </CardHeader>
          <Separator className="my-4" orientation="horizontal" />
          <CardContent className="flex-1">
            <Table className="table-auto w-full mt-4 rounded-lg overflow-hidden">
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="">Description</TableHead>
                  <TableHead className="">Qty</TableHead>
                  <TableHead className="text-right">Unit Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="">{item.description}</TableCell>
                    <TableCell className="">{item.quantity}</TableCell>
                    <TableCell className="text-right">
                      {Number(item.unitPrice).toLocaleString("en-KE", {
                        style: "currency",
                        currency: "KES",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {Number(item.total).toLocaleString("en-KE", {
                        style: "currency",
                        currency: "KES",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <Separator className="my-4" orientation="horizontal" />
          <CardFooter>
            <div className="flex flex-row items-end justify-end w-full">
              <div className="w-1/2">
                <Table>
                  <TableBody>
                    <TableRow className="border-none">
                      <TableCell className="">Sub Total</TableCell>
                      <TableCell className="text-right">
                        {Number(invoiceData.totals["CASH"]).toLocaleString(
                          "en-KE",
                          {
                            style: "currency",
                            currency: "KES",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="">Tax</TableCell>
                      <TableCell className="text-right">
                        {Number(
                          invoiceData.totals["TOTAL AMOUNT D-Non-VAT"]
                        ).toLocaleString("en-KE", {
                          style: "currency",
                          currency: "KES",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-none">
                      <TableCell className="font-bold text-xl">Total</TableCell>
                      <TableCell className="text-right font-bold text-xl">
                        {Number(invoiceData.totals.TOTAL).toLocaleString(
                          "en-KE",
                          {
                            style: "currency",
                            currency: "KES",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default single;
