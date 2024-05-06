import { apiClient } from "../constant/api";

export const getUser = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/User/login`, data);
    alert(JSON.stringify(res.data));
    return res?.data;
};

export const apiLogin = async (
    data: any,
): Promise<any> => {
    const res = await apiClient?.post(`/api/User/login`, data);
    return res?.data;
};