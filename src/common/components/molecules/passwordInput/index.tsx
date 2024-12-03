"use client";
import React, { useState } from "react";
import Input from "../../atoms/input";
import Label from "../../atoms/label";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  formik?: any;
  ConfirmPassword?: boolean;
  label?: string;
  containerClassName?: string;
}

function PasswordInput({
  onChange,
  value,
  onBlur,
  name,
  ConfirmPassword,
  containerClassName,
  label,
  placeholder = "Enter your password",
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      <Label className="" bold>
        {label ? label : ConfirmPassword ? "Confirm Password" : "Password"}
      </Label>
      <div className="relative">
        <Input
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
        />
        {showPassword ? (
          <IoEyeOutline
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-2xl text-grayG cursor-pointer"
          />
        ) : (
          <IoEyeOffOutline
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-2xl text-grayG cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
