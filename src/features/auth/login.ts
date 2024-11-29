import {  Toast } from "~/utils/libraries";
// const domain = process.env.NODE_ENV === "production" ? "" : undefined;

type loginProps = {
  email: string;
  password: string;
};

const login = async ({ email, password }: loginProps) => {
  try {
      Toast.fire({ icon: "success", title: "جاري تحويلك ..." });
      window.location.href = "/dashboard";

  } catch ({error}:any) {
    
    console.error("error", error);
    Toast.fire({ icon: "error", title: "حدث خطأ، يرجى المحاولة مرة أخرى." });
  }
};

export default login;