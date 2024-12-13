"use server";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";

export const fetchDataFromApi = async (
  endpoint: string,
  params: any = null,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: any = null
) => {
  const token = Cookies.get(cookiesValues.GlobalToken); 
  const headers: HeadersInit = {
    Accept: "application/json, text/plain, */*",
  };

  if (method !== "GET" && body) {
    headers["Content-Type"] = "application/json"; 
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const requestBody = body ? JSON.stringify(body) : null; 
  const response = await fetch(`http://192.99.33.197:8081/api/v1${endpoint}`, {
    method,  
    headers,
    body: requestBody,
    ...(method === "GET" && { body: null })
  });
  return await response.json();
};

export default fetchDataFromApi;
