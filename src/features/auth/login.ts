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
  const endpoint = "/auth/login";
  const body = { username: email, password: password };

  try {
    console.log("Sending login request...");
    const response :any= await fetchDataFromApi(endpoint, null, "POST", body);
    const { Success, Data } = response;
    console.log(response);

    if (Success) {
      if (Data?.Token) {
        Cookies.set(cookiesValues.GlobalToken, Data.Token, { path: "/", secure: true });
      } else {
        console.error("Token is undefined or null");
      }
      Toast.fire({ icon: "success", title: "جاري تحويلك ..." });
      store.dispatch(setUser(Data));

      console.log("Redirecting to dashboard...");
      window.location.href = "/dashboard";
    } else {
      Toast.fire({ icon: "error", title: "فشل تسجيل الدخول. يرجى التحقق من المعلومات." });
    }
  } catch (error: any) {
    console.error("Login error:", error);
    const errorMessage = error.response?.data?.message || "حدث خطأ، يرجى المحاولة مرة أخرى.";
    Toast.fire({ icon: "error", title: errorMessage });
  }
};

export default login;
