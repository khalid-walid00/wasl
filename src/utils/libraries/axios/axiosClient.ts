import axios from 'axios';
import Cookies from 'js-cookie';
import { cookiesValues } from '~/config/constant';
import https from 'https';

const axiosClient = axios.create({
  baseURL: process.env.MAIN_BASE_URL,
  headers: {
    'Authorization': 'Bearer ' + Cookies.get(cookiesValues.GlobalToken),
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Ignore SSL errors (not recommended for production)
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
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
