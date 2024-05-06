import { apiClient } from "../constant/api";

export const EmpSearch = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/Emp/search`, data);
    return res?.data;
};

export const EmpCreate = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/Emp/create-emp`, data);
    return res?.data;
};

export const EmpUpdate = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/Emp/update-emp`, data);
    return res?.data;
};

export const EmpGetById = async (
    id: any,
): Promise<any> => {
    const res = await apiClient?.get(`/api/Emp/get-by-id/` + id);
    // alert(res.data);
    return res?.data;
};



export const Emp_Delete = async (
    id: any,
): Promise<any> => {
    //alert("id del: " + id);
    const res = await fetch(`http://localhost:41624/api/Emp/delete-emp?id=${id}`, {
        method: 'DELETE'
    });
    return 1;
};

export const ImgUpload = async (file: File): Promise<any> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await apiClient?.post(`/api/User/upload`, formData);
    return res?.data;
};
