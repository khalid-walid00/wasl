import React from 'react';

interface CustomLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  primary?: boolean;
  bold?: boolean;
  htmlFor?: string; 
}

function CustomLabel({ children, primary, bold, className = "", htmlFor, ...rest }: CustomLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={` text-lg ${bold ? "font-bold" : "font-normal"} ${
        primary ? "text-grayG" : "text-blackBlue"
      } ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
}

export default CustomLabel;
