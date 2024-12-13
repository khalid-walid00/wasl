import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Toast } from "~/utils/libraries";
import { useDispatch, useSelector } from "react-redux";
import { goToStep, setData } from "~/app/(auth)/forgetPassword/forgetPassword.slice";
import Button from "../../atoms/button";
import OtpInput from "../../molecules/otpInput";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import CustomBtnBack from "../../atoms/customBtnBack";

export default function GetThePasswordTemplate() {
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); 
  const { data } = useSelector((state: any) => state.forgetPassword);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };
  const handleSubmit = async (values: any) => {
    const verificationCode = `${values.opt1}${values.opt2}${values.opt3}${values.opt4}${values.opt5}${values.opt6}`;
    const body = {
      Code: verificationCode,
      Email : data.Email
    };
    const endpoint = `/authentication/check-code`;
    setLoading(true);
    try{
    const response = await fetchDataFromApi(endpoint,null,"POST", body)
    setLoading(false);
       const {StatusCode,Message} = response
       if (StatusCode === 200) {
        dispatch(setData({Code:body.Code}));
        dispatch(goToStep(3));
        Toast.fire({
          title: Message,
          icon: "success",
        });
      }else{
        Toast.fire({
          title: Message,
          icon: "error",
        })
      }
      }catch(error){
        setLoading(false);
        Toast.fire({
          title: "Code not valid",
          icon: "error",
        })
      }

  };

  const formik = useFormik({
    initialValues: { opt1: "", opt2: "", opt3: "", opt4: "", opt5: "" },
    onSubmit: handleSubmit,
  });

  return (
  <form onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-8">
  <div className="flex flex-col gap-10">
    <div className="flex flex-col gap-8">
      <div className="flex items-center w-full justify-center">
        <div className="relative w-[120px] h-[95px]">
              <svg width="122" height="96" viewBox="0 0 122 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M79.3465 0.88275C85.5702 1.6525 91.5794 3.63869 97.0285 6.72705C102.478 9.8154 107.259 13.945 111.097 18.8781C127.269 39.5791 123.505 69.3899 102.692 85.4741C102.673 85.4857 102.659 85.4998 102.64 85.5161C81.8342 101.596 51.8641 97.8549 35.6974 77.1609C35.688 77.1469 35.6763 77.1329 35.6645 77.1212C33.5736 74.4415 31.775 71.5483 30.2991 68.4904C33.2969 68.4037 36.2751 67.9789 39.1765 67.224C40.1237 68.8769 41.1874 70.4611 42.3595 71.9647C55.6791 88.9764 80.3378 92.0255 97.437 78.7754C114.539 65.5301 117.602 41.0043 104.285 23.9949C94.8225 11.9131 79.1303 6.45052 64.157 10.0253C62.7234 7.40526 60.9993 4.95307 59.0172 2.71453C59.595 2.52761 60.18 2.36173 60.7696 2.19817C66.8233 0.532282 73.1471 0.0883556 79.3723 0.88275H79.3465ZM0.862305 30.6772V27.0791C1.79491 12.3688 14.0785 0.721535 29.1011 0.714525H29.1128C44.7533 0.712189 57.4315 13.315 57.4409 28.8711C57.4479 44.4272 44.7721 57.0394 29.1316 57.0464C14.0949 57.0511 1.79491 45.3992 0.862305 30.6772ZM20.407 21.6538C20.6537 19.7309 21.5487 18.0066 22.8618 16.7005V16.6982C24.4216 15.1468 26.5687 14.1865 28.932 14.1865C31.2975 14.1865 33.4446 15.1468 35.0044 16.6982L35.0091 16.7005C36.5643 18.2473 37.5297 20.3851 37.5297 22.7356V27.1538H39.6205C39.9822 27.1608 40.2806 27.4576 40.2806 27.8221V41.2567C40.2806 41.6235 39.9799 41.9249 39.6111 41.9249H18.6921C18.3233 41.9249 18.0203 41.6235 18.0203 41.2567V27.8221C18.0203 27.4552 18.3233 27.1538 18.6921 27.1538H20.3342V22.7169C20.3342 22.3594 20.3553 22.002 20.3999 21.6538H20.407ZM23.6699 27.1538H34.194H34.1916V22.6889C34.1916 21.252 33.5973 19.9435 32.6483 18.9973C31.6922 18.051 30.379 17.4622 28.932 17.4622C27.4896 17.4622 26.1741 18.0487 25.2227 18.9973C24.3277 19.8875 23.7498 21.0931 23.6864 22.4295H23.6746L23.6699 22.6702V27.1538ZM70.7769 24.9179C71.0681 22.6094 73.1824 20.9739 75.4962 21.2636H75.5056C77.8125 21.572 79.4357 23.6749 79.1374 25.9669L76.3889 47.9506L91.6723 59.7614C93.5163 61.1866 93.857 63.8268 92.424 65.6679C91.7372 66.5477 90.7277 67.1207 89.6168 67.2614C88.5057 67.4063 87.3828 67.1025 86.5019 66.4156L69.3956 53.1889C68.8052 52.7646 68.3364 52.1944 68.0354 51.5347C67.7176 50.8264 67.599 50.0455 67.6925 49.2754L70.7769 24.9295V24.9179Z" fill="#008ffb"/>
</svg>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl text-blackBlue text-center font-bold">
          Get Your Password
        </div>
        <div className="text-[18px] text-subColor text-center">
          We have sent the code to your phone
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6 items-center">
      <OtpInput
        formik={formik}
        inputLength={6}
        namePrefix="opt"
        className="w-[50px] h-[50px] flex items-center justify-center"
      />
      <div className="flex text-[22px] gap-1">
        <div>The code will expire in</div>
        <div className="text-mainColor"> {formatTime(timeLeft)}</div>
      </div>
    </div>
  </div>
  <div className=" flex gap-6">
  <Button disabled={timeLeft <= 0} style={{height: "55px",backgroundColor:timeLeft <= 0 ? "#D9D9D9" : ""}} primary type="submit" loading={loading}>
    Verify
  </Button>
  <CustomBtnBack type="button" onClick={() => dispatch(goToStep(1))} />
  </div>
</form>

  );
}
