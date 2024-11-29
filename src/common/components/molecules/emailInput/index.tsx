import React from "react";
import Input from "../../atoms/input";
import Label from "../../atoms/label";
interface type {
  onChange?: any;
  value?: any;
  onBlur?: any;
  placeholder?: string;
  name?: string;
  formik?: any;
  label?:string
}
function EmailInput({onChange, value, onBlur, name,label,placeholder}: type) {
  return (
    <div className=" flex flex-col gap-[12px]">
      <Label htmlFor={''} className="text-[18px]" bold>{label}</Label>
      <Input  onChange={onChange} value={value} onBlur={onBlur} name={name}  dir={'rtl'} type={'tel'} placeholder={placeholder} />
    </div>          
  );
}

export default EmailInput;
