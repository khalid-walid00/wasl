import axios from "axios";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";

const axiosClient = axios.create({
  baseURL: process.env.MAIN_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
  timeout: 10000, 
});

// Add a request interceptor to dynamically set Authorization header
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

// Enhance error handling
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network Error:", error.message);
    } else {
      // Something else caused the error
      console.error("Unexpected Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export const fetchDataFromApi = (
  endpoint: string, 
  params?: any, 
  method = "GET", 
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
