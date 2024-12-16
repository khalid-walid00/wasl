"use server";
import axios from 'axios';
import { cookies } from 'next/headers';
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
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(cookiesValues.GlobalToken)?.value;

    const headers: Record<string, string> = {
      Accept: "application/json, text/plain, */*",
    };

    if (method !== "GET" && body) {
      headers["Content-Type"] = "application/json";
    }

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const url = `http://212.102.11.66:22/api/v1${endpoint}`;

    const config = {
      method,
      url,
      headers,
      params,
      data: body,
    };

    const response = await axios(config);

    console.log("response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Fetch Error:", error);

    if (error.response) {
      throw new CustomError(error.response.status, error.response.statusText);
    } else if (error.request) {
      throw new CustomError(500, "No response from server");
    } else {
      throw new CustomError(500, error.message);
    }
  }
};

export default fetchDataFromApi;
