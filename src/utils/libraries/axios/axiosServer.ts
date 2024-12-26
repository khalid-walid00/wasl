"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { cookiesValues } from "~/config/constant";
import { HttpMethod } from "~/types";

interface CustomError extends Error {
  StatusCode?: number;
}

export const fetchDataFromApi = async (
  endpoint: string,
  params: any = null,
  method: HttpMethod = "GET",
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

    const url = `https://api.lamarpro.com:22/api/v1${endpoint}`;

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
   console.log("error", error);
    throw  error;
  }
};

export default fetchDataFromApi;
