import React from "react";
import Input from "../../atoms/input";
import Label from "../../atoms/label";
interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formik?: any;
  label?:string;
  containerClassName?:string
}
function InputText({
  onChange,
  value,
  placeholder,
  onBlur,
  name,
  formik,
  label,
  containerClassName,
  type = 'text'
}: InputTextProps) {
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
    <Label  bold>{label}</Label>
    <Input onChange={onChange} value={value} onBlur={onBlur} name={name}  dir={'rtl'} type={type} placeholder={placeholder} />
    {name && formik?.errors[name] && formik?.touched[name] && (
      <p className="text-red-500 text-end -mt-3 mb-1  py-2">
        {formik?.errors[name]}
      </p>
    )}
  </div>  
  );
}

export default InputText;
