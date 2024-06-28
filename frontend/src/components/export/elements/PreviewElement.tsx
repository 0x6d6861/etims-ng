import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AccountingSoftware, AccountingType, mappings } from "./type";

function PreviewElement(props: {
  software: AccountingSoftware;
  type: AccountingType;
}) {
  const mapping = mappings?.[props.software]?.[props.type] || {};

  return (
    <Table className="w-full border border-gray-100">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="bg-gray-100">
        <TableRow>
          {Object.keys(mapping).map((key) => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHeader>
      {/* <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody> */}
    </Table>
  );
}

export default PreviewElement;
