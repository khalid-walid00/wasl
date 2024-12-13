import { Toast } from "~/utils/libraries";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import { setUser } from "~/app/appSlice";
import { store } from "~/redux/persist";

type loginProps = {
  password: string;
  email: string;
};


const login = async ({ email, password }: loginProps) => {
  const endpoint = "/authentication/login";
  const body = { Email: email, Password: password };
   
  try {
    const response :any= await fetchDataFromApi(endpoint, null, "POST", body);
    const { Success, Data ,Message} = response;
    console.log(response);
    if (Success) {
      if (Data?.Token) {
        Cookies.set(cookiesValues.GlobalToken, Data.Token, { path: "/", secure: true });
      }
      Toast.fire({ icon: "success", title:Message });
      store.dispatch(setUser(Data));

      window.location.href = "/dashboard";
    } else {
      Toast.fire({ icon: "error", title: Message });
    }
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "حدث خطأ، يرجى المحاولة مرة أخرى.";
    Toast.fire({ icon: "error", title: errorMessage });
  }
};

export default login;
