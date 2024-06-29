import { AccountingSoftware, AccountingType, mappings } from "./type";

function PreviewElement(props: {
  software: AccountingSoftware;
  type: AccountingType;
}) {
  const mapping = mappings?.[props.software]?.[props.type] || {};

  return (
    <table className="w-full border border-gray-100">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <thead className="bg-gray-100">
        <tr>
          {Object.keys(mapping).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      {/* <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody> */}
    </table>
  );
}

export default PreviewElement;
