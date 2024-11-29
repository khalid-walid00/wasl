import React from "react";
import CustomInput from "../../atoms/input";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import CustomLabel from "../../atoms/label";
import { useSelector } from "react-redux";
interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formik?: any;
  handleCountrySelect?: any
  id?: any,
  containerClassName?: string
}
function InputPhone({
  onChange,
  value,
  placeholder,
  onBlur,
  name,
  formik,
  handleCountrySelect,
  id,
  containerClassName,
  type= 'tel'
}: InputTextProps) {




  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <CustomLabel bold>الهاتف</CustomLabel>
      <div className="flex items-center border border-[--lineBorder] rounded-lg ">
        <CustomInput
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          id={id}
          onBlur={onBlur}
          placeholder={placeholder}
          className="border-0 rounded-none text-end"
        />
     <div className="">
      {/* <CountrySelect className="w-[120px]" style={{ border: 'none', boxShadow: 'none', outline: 'none' }} handleCountrySelect={handleCountrySelect} /> */}
     </div>
      </div>

      {formik?.errors.email_or_phone && formik.touched.email_or_phone && (
        <p className="text-red-500 -mt-3 mb-1  py-2">
          {formik.errors.email_or_phone}
        </p>
      )}
    </div>
  );
}

export default InputPhone;







