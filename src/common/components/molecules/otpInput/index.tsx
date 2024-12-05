import React, { useEffect } from "react";
import CustomInput from "../../atoms/input";

interface OtpInputProps {
  formik: {
    values: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  inputLength: number;
  namePrefix: string;
  className?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({ formik, inputLength, namePrefix, className }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const inputName = `${namePrefix}${index + 1}`;
    formik.handleChange(e);
 
    if (value && index < inputLength - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };
useEffect(()=>{
  const firstOtp = document.getElementById(`otp-input-0`);
  firstOtp?.focus()
},[])
  return (
    <div className="w-full justify-center flex gap-2" dir="ltr">
      {Array.from({ length: inputLength }).map((_, index) => {
        const inputName = `${namePrefix}${index + 1}`;
        return (
          <CustomInput
          
            key={index}
            id={`otp-input-${index}`}
            style={{ padding: "10px", width: "50px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}
            className={`border-mainColor flex items-center justify-center text-center ${className || ""}`}
            onChange={(e) => handleInputChange(e, index)}
            value={formik.values[inputName]}
            maxLength={1}
            name={inputName}
            dir="rtl"
            type="tel"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
