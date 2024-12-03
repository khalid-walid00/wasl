import { Toast } from "~/utils/libraries";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import { redirect } from "next/navigation";
import { setUser } from "~/app/appSlice";
import { store } from "~/redux/persist";

type loginProps = {
  password: string;
  email: string;
};
type LoginResponse = {
  token: string;
  Success: boolean
  Data: any
};
const login = async ({ email, password }: loginProps) => {
  const endpoint = "authentication/login"; 
  const body = { Email:email, Password:password }
  
  try {
    const response = await fetchDataFromApi(endpoint, null, "POST", body);
    const data: LoginResponse = response.data;
    if(data?.Success) {
      Cookies.set(cookiesValues.GlobalToken, data.token, { path: "/",secure: true});
      Toast.fire({ icon: "success", title: "جاري تحويلك ..." });
      store.dispatch(setUser(data.Data))
      window.location.href = "/dashboard";
 
    } 
    
  } catch (error: any) {
    Toast.fire({ icon: "error", title: "حدث خطأ، يرجى المحاولة مرة أخرى." });
  }
};

export default login;
