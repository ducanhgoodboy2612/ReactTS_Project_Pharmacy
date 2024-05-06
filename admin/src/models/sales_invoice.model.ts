interface SalesInvoiceType {
    invoiceID: number;
    CreatedDate: Date | null;
    Status: boolean | null;
    CustomerName: string | null;
    Phone: string | null;
    Address: string | null;
}

export default SalesInvoiceType;
