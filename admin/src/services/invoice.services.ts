import { apiClient } from "../constant/api";

export const InvoiceSearch = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/Invoice/search-full`, data);
    return res?.data;
};

export const InvoiceSearch2 = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/Invoice/search-invoice`, data);
    return res?.data;
};

export const InvoiceGetById = async (
    id: any,
): Promise<any> => {
    const res = await apiClient?.get(`/api/Invoice/get-by-id/` + id);
    //alert(JSON.stringify(res.data.list_json_invoice_detail));
    return res?.data;
};

export const getInvoiceDetail = async (
    id: any,
): Promise<any> => {
    const res = await apiClient?.get(`/api/Invoice/get-by-id/` + id);
    //alert(JSON.stringify(res.data.list_json_invoice_detail));
    return res?.data.list_json_invoice_detail;
};

export const Invoice_Delete = async (
    id: any,
): Promise<any> => {
    //alert("id del: " + id);
    const res = await fetch(`http://localhost:41624/api/Invoice/delete-invoice?id=${id}`, {
        method: 'DELETE'
    });
    return 1;
};