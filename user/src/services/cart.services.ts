import { apiClient } from "../constant/api";

  export const createOrder = async (
    data: any,
  ): Promise<any> => {
   console.log(data);
    const res = await apiClient?.post(`api/Invoice/create-invoice`, data);  
    return res?.data;
  };