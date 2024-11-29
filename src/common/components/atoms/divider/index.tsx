import React from "react";

interface DividerProps {
  label: string;
}
export default function Divider({ label }: DividerProps) {
  return (
    <div className=" flex items-center justify-center gap-[10px]">
      <div className="flex items-center w-[70px] border-mainColor border-b-2"></div>
      <a className="text-center text-nowrap md:text-[18px] text-base mx-2">{label}</a>
      <div className="flex items-center w-[70px] border-mainColor border-b-2"></div>
    </div>
  );
}
