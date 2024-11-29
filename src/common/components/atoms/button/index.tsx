import React from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
  bgColorOpacity?: boolean;
  loading?: boolean;
}

function Button({
  children,
  onClick,
  primary = false,
  loading = false,
  className = "",
  bgColorOpacity,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`md:text-[22px] h-[50px] text-base flex items-center justify-center py-4 px-3 ${
        primary
          ? "bg-mainColor text-white"
          : ` text-mainColor border border-mainColor `
      } rounded-lg w-full font-bold ${className}`}
      {...rest}
    >
      {loading ? (
        <ClipLoader color={primary ? "#ffffff" : "#008ffb"} size={20} />
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
