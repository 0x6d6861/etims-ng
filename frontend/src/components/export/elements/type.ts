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
  custom: {
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

export const invoiceData = {
  customerDetails: {
    name: "PURITY WANJIRU GICHERE",
    pin: "A002621902D",
    invoiceNumber: "KRASRN000079638/3",
  },
  items: [
    {
      clientPin: "P051993765Z",
      clientName: "Powwater Limited",
      description: "Supply of natural water",
      code: "KE1NTXU0000011",
      unitPrice: 4000,
      quantity: 15,
      total: 60000,
      tax: "D",
    },
    {
      clientPin: "P051993765Z",
      clientName: "Powwater Limited",
      description: "Supply of natural water",
      code: "KE1NTXU0000011",
      unitPrice: 3000,
      quantity: 6,
      total: 18000,
      tax: "D",
    },
    {
      clientPin: "P051993765Z",
      clientName: "Powwater Limited",
      description: "Supply of natural water",
      code: "KE1NTXU0000011",
      unitPrice: 4300,
      quantity: 1,
      total: 4300,
      tax: "D",
    },
    {
      clientPin: "P051993765Z",
      clientName: "Powwater Limited",
      description: "Supply of natural water",
      code: "KE1NTXU0000011",
      unitPrice: 4500,
      quantity: 48,
      total: 216000,
      tax: "D",
    },
  ],
  totals: {
    TOTAL: 298300,
    "TOTAL AMOUNT D-Non-VAT": 298300,
    CASH: 298300,
    "ITEM NUMBER": 4,
    "Receipt Number": 3,
  },
  scuInfo: {
    Date: "28/05/2024 00:00:00",
    "Control Unit Number": "KRASRN000079638",
    "Invoice Number": "KRASRN000079638/3",
    "Internal Data": "ETZH-KT3Q-4HDM-COO4-RU46-YPLG-S4",
    "Receipt Singnature": "DA6K-Q5IF-X5WP-JBIE",
  },
};