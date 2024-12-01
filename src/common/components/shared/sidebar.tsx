"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Image } from "@nextui-org/react";
import SideBarSelector from "../molecules/sideBarSelector";
import { AiOutlineHome } from "react-icons/ai";
import { useParams } from "next/navigation";
import { PiBuildingOffice } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { LiaBikingSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa6";

function Sidebar() {
  const { app } = useParams();
  const { user, showSideBar } = useSelector((state: any) => state.config);
  const local = "ar";
  const menu = [
    {
      title: "",
      content: [
        {
          text: "الاحصائيات",
          icon: <AiOutlineHome size={22} className=" text-mainColor" />,

          href: `/dashboard/analysis`,
        },
       
      ],
    },
    {
      title: "",
      content: [
        {
          text: "المستخدمين",
          icon: <CiUser  size={22} className=" text-mainColor" />,
          href: `/dashboard/users`,
        },
       
      ],
    },
    {
      title: "",
      content: [
        {
          text: "ادارة الشركات",
          icon: <PiBuildingOffice size={22} className=" text-mainColor" />,
          href: `/dashboard/companies`,
        },
       
      ],
    },
    {
      title: "",
      content: [
        {
          text: "المركبات",
          icon: <PiBuildingOffice size={22} className=" text-mainColor" />,
          href: `/dashboard/vehicle`,
        },
       
      ],
    },
    {
      title: "",
      content: [
        {
          text: "السائقين",
          icon: <LiaBikingSolid  size={22} className=" text-mainColor" />,
          href: `/dashboard/drivers`,
        },
       
      ],
    },
  ];

  return (
    <div
      className={`${
        showSideBar
          ? "md:w-2/6 lg:w-1/6"
          : "fixed md:sticky md:w-[4%] hidden md:block"
      } transition-all duration-300 md:block z-[999] relative  `}
    >
      {/* القسم الأول */}
      <div
        className={` bg-white ${
          showSideBar
            ? "w-full sm:w-1/3 md:w-2/6 lg:w-1/6 sm:1/3  "
            : "md:w-[4%] hidden md:block"
        } transition-all duration-300 h-screen
          left-0
        overflow-y-auto fixed top-[80px] md:top-0  md:pb-10 pb-40 text-white  `}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
            position: "relative";
          }
        `}</style>
        <div
          className={`${
            showSideBar && "px-6"
          }  z-[99] h-[91PX] sticky shadow-sm border-b border-[#EFEFEF] top-0 py-8 bg-white`}
        >
          <div
            className={` items-center ${
              showSideBar ? "justify-start text-5xl" : "justify-center"
            } flex ${local === "ar" ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className=" flex gap-2  items-center">

           <FaCar size={30} className=" text-mainColor"/>
           {
            showSideBar && <div className=" text- font-bold text-mainColor">WSL</div>
           }
          
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 pt-2  bg-white">
          <div className="flex flex-col gap-5">
            <div
              className={`${
                showSideBar ? "flex" : "hidden"
              } flex flex-col items-center gap-4`}
            >
              <div className="flex justify-center items-center flex-col gap-2">
                <Link
                  className=" border overflow-hidden border-[#63AFB1] p-1 w-[85px] h-[85px] rounded-full"
                  href={"/profile"}
                >
                  <Image
                    width={76}
                    height={76}
                    className="object-contain rounded-full w-[85px] h-[85px] "
                    src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                    alt="logo"
                  />
                </Link>

                <div className="text-center text-mainColor  font-bold">
                 مرحبا بك 
                </div>
              </div>
            </div>

            <div>
              {menu.map((item, index) => (
                <SideBarSelector
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
