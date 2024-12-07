import React from 'react';
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?:any;
}

function CustomInput({
  type = "text",
  onChange,
  value,
  placeholder,
  onBlur,
  name,
  className = "",
  ref,
  ...rest
}: CustomInputProps) {
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full text-end rounded-lg bg-transparent py-[10px] px-[12px] h-[40px]  outline-none border border-[--lineBorder] ${className}`} // دعم `className` مخصص
      {...rest}
    />
  );
}

export default CustomInput;