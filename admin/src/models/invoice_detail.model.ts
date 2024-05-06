interface InvoiceDetailType {
    key: string,
    invoiceID: number | null;
    product_Id: number | null;
    quantity: number | null;
    total_Price: number | null;
}

export default InvoiceDetailType;
