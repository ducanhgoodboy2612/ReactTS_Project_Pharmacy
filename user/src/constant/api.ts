import axios from "axios";
export const apiClient = axios.create({ 
    baseURL: 'http://localhost:41624',
    timeout: 1000 * 60 * 30 * 3, // 90 minutes
  });
