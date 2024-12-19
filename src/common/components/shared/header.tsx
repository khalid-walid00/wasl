"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "~/app/appSlice";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../atoms/button";
import { Tooltip } from "@nextui-org/react"; 
import { FaServer } from "react-icons/fa";


export default function PrimarySearchAppBar({ iconToggle = false }: { iconToggle?: boolean }) {

  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state: any) => state.config);
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return (
      <div
        className="h-screen fixed z-50 w-full flex justify-center items-center  border-whiteGray top-0 border-l py-8 px-6 text-white bg-white"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}</style>
        <div className="absolute top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-10 backdrop-blur-sm"></div>
        <div className="relative z-20">
        </div>
      </div>
    );
  }
 function clearPersistedData() {
  localStorage.removeItem("persist:root");
  window.location.reload();
 }
  return (
    <div className="sticky bg-[#fff] top-0 z-[99999] shadow-sm " >
      <div className="w-full flex justify-start items-center border-b border-[#EFEFEF] h-[61px] px-4 md:px-5">
        <div className={`w-full flex justify-between items-center`}>
        <HiOutlineMenuAlt3 onClick={() => dispatch(toggleSideBar(!showSideBar))} className={`${showSideBar ? "0" : "rotate-180"} ${iconToggle ? "block" : "hidden"} transition-all duration-300 cursor-pointer text-mainColor w-[40px] h-[40px]`}/>
          <div className="">
          <Tooltip classNames={
            {
              content: "border-red-600 border rounded-md bg-white shadow-lg",
            }
          } content={<div className=" py-1">Get All Data From Server</div>} placement="bottom">
          <div className="">
              <Button style={{backgroundColor: "red"}} onClick={clearPersistedData} primary>
              <FaServer />
              </Button>
          </div>
            </Tooltip>
          </div>

        </div>
      </div>
    </div>
  );
}
