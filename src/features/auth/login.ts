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
  const endpoint = "authentication/login";
  const body = { Email: email, Password: password };

  try {
    console.log("Sending login request...");
    const response :any= await fetchDataFromApi(endpoint, null, "POST", body);
    const { Success, Data } = response;

    if (Success) {
      console.log("Login successful. Setting token...", Data);
      Cookies.set(cookiesValues.GlobalToken, Data.token, { path: "/", secure: true });
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
