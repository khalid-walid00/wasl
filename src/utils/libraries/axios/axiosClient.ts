import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.MAIN_BASE_URL + '/api/v1/',
  timeout: 10000, 
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export const fetchDataFromApi = (
  endpoint: string, 
  params?: any, 
  method = "GET", 
  body?:any
) => {
  return axiosClient({
    url: endpoint,
    method,
    params,
    data: body
  });
};

export default axiosClient;
