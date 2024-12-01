import React, { useState } from "react";
import { useFormik } from "formik";
import { Toast } from "~/utils/libraries";
import {  useSearchParams } from "next/navigation";
import Button from "../../atoms/button";
import InputText from "../../molecules/textInput";
import PasswordInput from "../../molecules/passwordInput";
import Link from "next/link";
import login from "~/features/auth/login";



export default function LoginTemplate() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams()
  const paramValue = searchParams.get('plan')
  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      const { email, password } = values;
      let registerData: any = {
        email,
        password,
      };

      // await validationSchema.validate(registerData);
      await login({
        email,
        password,
      })


    } catch (error) {
      console.error("Unexpected error:", error);
      Toast.fire({
        icon: "error",
        title: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: handleSubmit,
  });


  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-[24px]">
     
      <div className="flex flex-col gap-[8px]">
        <div className="md:text-[24px] text-[22px]  text-blackBlue text-center  font-bold md:text-start">
          تسجيل الدخول
        </div>
        <div className="text-[16px] text-grayG text-base text-center  font-bold md:text-start">
          من فضلك ادخل بياناتك للمتابعة
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <InputText   placeholder="ادخل بريدك الإلكتروني " label="البريد الإلكتروني " name="email" onChange={formik.handleChange} value={formik.values.email} />
        <div className="flex flex-col gap-[12px]">
          <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password} />
          <Link href={"/forgetPassword"} className="text-[18px] text-base font-normal text-mainColor">
            هل نسيت كلمة السر؟
          </Link>
        </div>
      </div>
      <Button primary style={{ fontSize: "20px" }} type={"submit"} loading={loading}>تسجيل الدخول</Button>
    </form>
  );
}
