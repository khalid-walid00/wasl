"use client";

import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "~/app/appSlice";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import UserOptionsTemplates from "../templates/userOptions";
import SearchTemplates from "../templates/search";


export default function PrimarySearchAppBar({ iconToggle = false }: { iconToggle?: boolean }) {

  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state: any) => state.config);
  const [isLoading, setIsLoading] = useState(false);
   const locale="ar"
  if (isLoading) {
    return (
      <div
        className="h-screen fixed z-50 w-full flex justify-center items-center  border-whiteGray top-0 border-l py-8 px-6 text-white bg-white"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        dir="rtl"
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

  return (
    <div className="sticky bg-[#fff] top-0 z-[99999] shadow-sm " dir="rtl">
      <div className="w-full flex justify-start items-center border-b border-[#EFEFEF] md:py-5 pt-2 pb-5 px-4 md:px-5">
        <div
          className={`w-full flex flex-wrap items-center flex-col-reverse lg:flex-row gap-y-2  
            } `}
        >

          <div
            className={`flex  w-full lg:w-6/12   flex-row
               justify-end xs:justify-start gap-3 text-white items-center `}
          >
            <HiOutlineMenuAlt3
              onClick={() => dispatch(toggleSideBar(!showSideBar))}
              className={`${showSideBar ? "0" : "rotate-180"} ${iconToggle ? "md:block hidden" : "hidden"}
                transition-all duration-300 cursor-pointer text-mainColor w-[40px] h-[40px]`}
            />

            <div className="w-full">
              <SearchTemplates />
            </div>
          </div>

          <div
            className={`flex  w-full lg:w-6/12  sm:gap-6 gap-3 items-center justify-between ${locale === "ar" ? "flex-row" : "flex-row-reverse"
              }`}
          >

            <HiOutlineMenuAlt3
              onClick={() => dispatch(toggleSideBar(!showSideBar))}
              className={`${showSideBar ? "0" : "rotate-180"
                } ${iconToggle ? "block" : "hidden"}  md:hidden transition-all duration-300 cursor-pointer text-mainColor w-[40px] h-[40px]`}
            />

            <div className="flex lg:gap-6 gap-2  items-center justify-end w-full">
            
              <div className="  flex items-center justify-center md:border-r pr-2 border-[#ECECEC]" >
                <UserOptionsTemplates />

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
