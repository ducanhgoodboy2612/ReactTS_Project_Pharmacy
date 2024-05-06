import { apiClient } from "../constant/api";
  export const getMenus = async (): Promise<any> => {
    const res = await apiClient?.get(`/api/Cate/get-all-cate`);
    return res?.data;
  };

