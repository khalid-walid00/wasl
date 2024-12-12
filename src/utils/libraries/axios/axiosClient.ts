import axios from "axios";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";

const axiosClient = axios.create({
  baseURL: process.env.MAIN_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*'
  },
  timeout: 10000, 
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get(cookiesValues.GlobalToken);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      console.error("Network Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const fetchDataFromApi = (
  endpoint: string, 
  params?: any, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = "GET", 
  body?: any
) => {
  return axiosClient({
    url: endpoint,
    method,
    params,
    data: body
  });
};

export default axiosClient;
