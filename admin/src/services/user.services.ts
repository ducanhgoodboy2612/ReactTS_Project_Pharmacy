import { apiClient } from "../constant/api";

export const apiSearch = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Users/search`, data);  
    return res?.data;
  };

  export const apiCreate = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Users/create-user`, data);  
    return res?.data;
  };

  export const apiUpdate = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Users/update-user`, data);  
    return res?.data;
  };

  export const apiGetById = async (
    id: any,
  ): Promise<any> => {
    const res = await apiClient?.get(`/api/Users/get-by-id/`+ id);  
    return res?.data;
  };

  export const apiDelete = async (
    data: any,
  ): Promise<any> => {
    const res = await apiClient?.post(`/api/Users/delete-user`, data);  
    return res?.data;
  };
