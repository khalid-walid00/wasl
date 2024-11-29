import React from 'react';

interface CustomLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  primary?: boolean;
  bold?: boolean;
  htmlFor?: string; // Define the type of htmlFor as string to match the HTML attributes
}

function CustomLabel({ children, primary, bold, className = "", htmlFor, ...rest }: CustomLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={` text-base ${bold ? "font-bold" : "font-normal"} ${
        primary ? "text-grayG" : "text-blackBlue"
      } ${className}`}
      {...rest} // Spread remaining props which should now be valid for HTMLLabelElement
    >
      {children}
    </label>
  );
}

export default CustomLabel;
