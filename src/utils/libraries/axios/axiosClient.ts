import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";

const baseURL = 'http://192.99.33.197:8083/api/v1';

interface FetchParams {
  [key: string]: any;
}

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchDataFromApi = async (
  endpoint: any,
  params: any,
  method: any = 'GET',
  body?: any
): Promise<any> => {
  const url = new URL(`${baseURL}${endpoint}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const token = Cookies.get(cookiesValues.GlobalToken);
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(`API Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error: any) {
    if (error.name === 'TypeError') {
      console.error("Network Error:", error.message);
    } else {
      console.error("Unexpected Error:", error.message);
    }
    throw error;
  }
};

