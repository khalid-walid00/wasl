"use server";
import { cookies } from 'next/headers'
import { cookiesValues } from '~/config/constant';

class CustomError extends Error {
  StatusCode: number;
  Message: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.StatusCode = statusCode;
    this.Message = message;
  }
}

export const fetchDataFromApi = async (
  endpoint: string,
  params: any = null,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: any = null
) => {
  const cookieStore = await cookies()
  const token = cookieStore.get(cookiesValues.GlobalToken)?.value

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
  const url = new URL(`http://192.99.33.197:8081/api/v1${endpoint}`);

  if (params) {
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  }
  try {
    const response = await fetch(url.toString(), {
      method,
      headers,
      body: requestBody,
      ...(method === "GET" && { body: null })
    });
    
    if (response.status===404) {
      throw new CustomError(response.status, response.statusText);
 
      }
    const responseData = await response.json();
    return responseData;
  } catch (error:any) {
    console.error("Fetch Error:", error);
    return {
      StatusCode: error.StatusCode,
      Message: error.message
       }; 
  }
};

export default fetchDataFromApi;

