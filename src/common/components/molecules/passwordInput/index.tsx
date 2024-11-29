"use client";
import React, { useState } from "react";
import Input from "../../atoms/input";
import Label from "../../atoms/label";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

interface type {
  onChange?: any;
  value?: any;
  onBlur?: any;
  placeholder?: string;
  name?: string;
  formik?: any;
  ConfirmPassword?:boolean;
  label?:string
  containerClassName?:string
}
function PasswordInput({onChange, value, onBlur, name,ConfirmPassword,containerClassName,label,placeholder="ادخل كلمة المرور"}: type) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <Label className="" bold>{label ? label :ConfirmPassword?'تأكيد كلمة المرور':'كلمة المرور'}</Label>
      <div className="relative">
      <Input  onChange={onChange} value={value} onBlur={onBlur} name={name} type={showPassword ? "text" : "password"} placeholder={placeholder} />
     { showPassword ? <IoEyeOutline onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 left-3 -translate-y-1/2 text-2xl text-grayG cursor-pointer" /> : <IoEyeOffOutline onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 left-3 -translate-y-1/2 text-2xl text-grayG cursor-pointer" />}
      </div>
    </div>
  );
}

export default PasswordInput;
