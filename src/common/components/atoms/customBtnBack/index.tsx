import React from "react";
import Button from "../button";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  onClick: any;
  type?: "button" | "submit" | "reset";
}


function CustomBtnBack({ onClick,type }: Props) {
  return (
    <div className=" h-full cursor-pointer ">
      <Button
      type={type}
        onClick={onClick}
        className=" text-[22px] font-bold h-[100%] cursor-pointer "
      >
        <div className=" flex items-stretch gap-2">
        Back
        <IoIosArrowBack /> 
        </div>
      </Button>
    </div>
  );
}

export default CustomBtnBack;
