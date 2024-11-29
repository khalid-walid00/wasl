import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../button";

interface Props {
  event: any;
}
function CustomBtnBack({ event }: Props) {
  return (
    <div className=" cursor-pointer ">
      <Button
        onClick={event}
        className=" text-[22px] font-bold  cursor-pointer "
      >
        <div className=" flex items-stretch gap-2">
        عودة
        <IoIosArrowForward /> 
        </div>
      </Button>
    </div>
  );
}

export default CustomBtnBack;
