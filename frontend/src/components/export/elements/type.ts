export type AccountingSoftware = 'quickbooks' | 'sage' | 'odoo' | 'zoho' | 'salesforce' | 'custom';
export type AccountingType = 'purchase' | 'sales';

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T; };

export const mappings: PartialRecord<AccountingSoftware, { [key in AccountingType]: {[key: string]: string} }> = {
  quickbooks: {
    purchase: {
      "Vendor Name": "invoiceData.customerDetails.name",
      Date: "invoiceData.scuInfo.Date.split(' ')[0]",
      "Purchase Order Number": "invoiceData.customerDetails.invoiceNumber",
      Item: "item.code",
      Description: "item.description",
      Quantity: "item.quantity",
      Rate: "item.unitPrice",
      Amount: "item.total",
      Customer: "item.clientName",
      Class: "",
      Other: "",
    },
    sales: {
      "Customer Name": "invoiceData.customerDetails.name",
      Date: "invoiceData.scuInfo.Date.split(' ')[0]",
      "Sales Order Number": "invoiceData.customerDetails.invoiceNumber",
      Item: "item.code",
      Description: "item.description",
      Quantity: "item.quantity",
      Rate: "item.unitPrice",
      Amount: "item.total",
      "Sales Rep": "",
      Class: "",
      Other: "",
    },
  },
};

export const choices: { id: AccountingSoftware; label: string; icon?: string }[] = [
  { id: "quickbooks", label: "Quickbooks", icon: "quickbooks" },
  { id: "sage", label: "Sage Accounting", icon: "sage" },
  { id: "odoo", label: "Odoo", icon: "odoo" },
  { id: "zoho", label: "Zoho", icon: "zoho" },
  { id: "salesforce", label: "Salesforce", icon: "salesforce" },
  { id: "custom", label: "Custom Format" },
];