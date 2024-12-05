import React, { useState } from "react";
import { useFormik } from "formik";
import { Toast } from "~/utils/libraries";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { goToStep } from "~/app/(auth)/forgetPassword/forgetPassword.slice";
import PasswordInput from "../../molecules/passwordInput";
import Button from "../../atoms/button";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";

export default function NewPasswordTemplate() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch()
  const { data } = useSelector((state: any) => state.forgetPassword);
  const endpoint = `authentication/reset-password`;
  console.log("data",data);

  const handleSubmit = (values: any) => {
    const { password, rePassword } = values;
    if (password !== rePassword) {
      Toast.fire({
        title: "كلمة المرور غير متطابقة",
        icon: "error",
      });
      return;
    }
    const variables: any = {
      Email: data.Email,
      Password:password,
      Code: data.Code
    };

    setLoading(true);
   
    fetchDataFromApi(endpoint, null, "Post", variables)
    .then(({StatusCode}:any) => {
      if (StatusCode === 200) {
        Toast.fire({
          title: "تم التحقق بنجاح",
          icon: "success",
        });
        router.push("/login");
      }
      })
      .catch((error) => {
        Toast.fire({
          title: "لقد حدث خطأ ما. حاول مجددا",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  const formik = useFormik({
    initialValues: { password: "", rePassword: "" },
    onSubmit: handleSubmit,
  });



  return (
    <form onSubmit={formik.handleSubmit} className="flex w-full flex-col">
    <div className="flex flex-col gap-8">
      <div className="flex items-center w-full justify-center">
        <div className="relative w-[98px] h-[95px]">
          <svg width="100" height="96" viewBox="0 0 100 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3179 44.023H38.6308V37.0274C38.6308 33.2534 40.1759 29.8228 42.6609 27.3362V27.333C45.1468 24.8471 48.5789 23.3028 52.3545 23.3028C56.1285 23.3028 59.5591 24.8471 62.0449 27.333L62.0481 27.3362C64.5332 29.822 66.0783 33.2542 66.0783 37.0266V44.0222L68.7179 44.023C69.3055 44.023 69.7867 44.5041 69.7867 45.0917V67.6709C69.7867 68.2585 69.3047 68.7397 68.7171 68.7397H35.3179C34.7303 68.7397 34.2483 68.2577 34.2483 67.6709V45.0917C34.2483 44.5041 34.7295 44.023 35.3179 44.023ZM14.167 18.2767C12.7412 20.0436 11.4242 21.9202 10.1152 24.2467C5.32206 32.769 3.29175 42.445 4.11877 51.9016C4.92737 61.138 8.46759 70.1768 14.8267 77.7376C17.1108 80.4532 19.5614 82.8469 22.1377 84.9173C31.0339 92.0706 41.5729 95.598 52.0839 95.4979C62.5989 95.3979 73.0667 91.6679 81.822 84.3048C84.3751 82.1576 86.7688 79.7198 88.9593 76.9954C94.0799 70.6251 97.3751 63.1531 98.6232 55.2689C99.8498 47.5256 99.0996 39.3939 96.1662 31.5273C93.3745 24.0377 89.1098 17.3688 83.5369 12.1481C78.2249 7.17162 71.7385 3.5065 64.2153 1.68755C61.8592 1.11753 59.4606 0.745256 57.0172 0.587539C54.5658 0.429822 52.0591 0.482661 49.4908 0.766872C47.8808 0.944604 46.7216 2.39208 46.8985 4.00207C47.0762 5.61126 48.5237 6.77133 50.1329 6.59359C52.3609 6.34701 54.5321 6.30058 56.6505 6.43748C58.7753 6.57438 60.8376 6.89221 62.8399 7.37737C69.3295 8.94574 74.9321 12.1121 79.5227 16.4145C84.4367 21.0187 88.2067 26.9223 90.6838 33.5688C93.2553 40.4643 93.9142 47.5832 92.8422 54.3514C91.7533 61.2277 88.8736 67.7525 84.3935 73.3247C82.4168 75.7833 80.2936 77.9521 78.0592 79.8311C70.3807 86.2895 61.2219 89.5607 52.0383 89.6488C42.8531 89.736 33.6238 86.637 25.8076 80.3539C23.4899 78.4901 21.3075 76.3645 19.2996 73.9764C13.7619 67.3923 10.6764 59.492 9.9687 51.398C9.24176 43.0919 11.0231 34.5952 15.2302 27.1152C16.4999 24.8575 17.8009 23.0554 19.2436 21.3181L19.6703 33.0836C19.7271 34.6992 21.0833 35.9626 22.6981 35.9049C24.3129 35.8473 25.5771 34.4919 25.5194 32.8771L24.8389 14.128C24.7821 12.5116 23.4259 11.249 21.8111 11.3059C21.7102 11.3099 21.6109 11.3187 21.5133 11.3315V11.3291L3.33899 13.8822C1.737 14.104 0.61777 15.5835 0.839534 17.1854C1.0605 18.7882 2.53999 19.9075 4.14278 19.6857L14.167 18.2767ZM43.9627 44.023H60.7456V36.9505C60.7456 34.6424 59.8009 32.544 58.2821 31.0237L58.2805 31.0245C56.7602 29.5042 54.661 28.5587 52.3545 28.5587C50.0464 28.5587 47.9481 29.5034 46.4269 31.0229C44.9074 32.5432 43.9635 34.6424 43.9635 36.9505V44.023H43.9627ZM52.4218 56.3777L54.1158 64.1947L49.4732 64.2139L50.835 56.2921C49.5669 55.8846 48.647 54.6965 48.647 53.2922C48.647 51.5541 50.056 50.1451 51.7949 50.1451C53.5322 50.1451 54.942 51.5541 54.942 53.2922C54.9412 54.8166 53.8596 56.0879 52.4218 56.3777Z" fill="#008ffb"/>
          </svg>
        </div>
      </div>
  
      <div className="flex flex-col gap-3">
        <div className="md:text-[32px] text-[22px] text-blackBlue text-center font-bold">
          Enter Your New Password
        </div>
        <div className="text-[20px] text-grayG flex justify-center font-bold">
          <div className="md:w-11/12 text-center">
            Your new password must be different from the previous password.
          </div>
        </div>
      </div>
    </div>
  
    <div className="flex-col flex gap-10">
      <div className="flex flex-col gap-[20px]">
        <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password} />
        <PasswordInput ConfirmPassword name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} />
      </div>
      <Button style={{ height: "55px" }} primary type={"submit"} loading={loading}>
        Submit
      </Button>
    </div>
  </form>
  
  );
}
