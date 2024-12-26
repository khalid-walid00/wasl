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
import { IoCarSportOutline } from "react-icons/io5";
import { GoGitPullRequest } from "react-icons/go";
import Logout from "~/features/auth/logout";
import { FiLogOut } from "react-icons/fi";
import { LuHardDriveDownload } from "react-icons/lu";

function Sidebar() {
  const { user, showSideBar } = useSelector((state: any) => state.config);
  const menu = [
    {
      title: "",
      content: [
        {
          text: "Statistics",
          icon: <AiOutlineHome size={22} className=" text-mainColor" />,
          href: `/dashboard/analysis`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Users",
          icon: <CiUser size={22} className=" text-mainColor" />,
          href: `/dashboard/users`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Companies Management",
          icon: <PiBuildingOffice size={22} className=" text-mainColor" />,
          href: `/dashboard/companies`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Vehicles",
          icon: <IoCarSportOutline size={22} className=" text-mainColor" />,
          href: `/dashboard/vehicle`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Drivers",
          icon: <LiaBikingSolid size={22} className=" text-mainColor" />,
          href: `/dashboard/drivers`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Requests Log",
          icon: <LuHardDriveDownload size={22} className=" text-mainColor" />,
          href: `/dashboard/requestsLog`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "RestFull Api",
          icon: <GoGitPullRequest size={22} className=" text-mainColor" />,
          href: `/dashboard/restFullApi`,
        },
      ],
    },
    {
      title: "",
      content: [
        {
          text: "Logout",
          icon: <FiLogOut size={22} className=" text-mainColor" />,
          onClick: Logout,
        },
      ],
    },
  ];


  return (
    <div
      className={`${showSideBar
        ? "md:w-2/6 lg:w-1/6"
        : "fixed md:sticky md:w-[4%] hidden md:block"
        } transition-all duration-300 md:block z-[999] relative  `}
    >
      {/* القسم الأول */}
      <div
        className={` bg-white ${showSideBar
          ? "w-full sm:w-1/3 md:w-2/6 lg:w-1/6 sm:1/3  "
          : "md:w-[4%] hidden md:block"
          } transition-all duration-300 h-screen
          left-0
        overflow-y-auto fixed top-[61px] md:top-0  md:pb-10 pb-40 text-white  `}
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
          className={`${showSideBar && "px-6"
            }  z-[99] h-[61px] sticky shadow-sm border-b border-[#EFEFEF] top-0  bg-white`}
        >
          <div
            className={` items-center h-full ${showSideBar ? "justify-start text-5xl" : "justify-center"
              } flex flex-row-reverse`}
          >
            <div className=" flex w-full justify-between  h-full items-center">

              {
                showSideBar && <div className=" text- font-bold text-mainColor">WASL</div>
              }
              
              <Image
                width={40}
                height={40}
                className=" object-cover rounded-full w-[85px] h-[85px] "
                src={"/assets/images/logo.jpg"}
                alt="logo"
              />

            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 pt-2  bg-white">
          <div className="flex flex-col gap-5">
            <div
              className={`${showSideBar ? "flex" : "hidden"
                } flex flex-col items-center gap-4`}
            >
              <div className="flex justify-center items-center flex-col gap-2">
                <Link
                  className=" border overflow-hidden border-mainColor p-1 w-[85px] h-[85px] rounded-full"
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
                  <div>
                    Welcome
                  </div>
                  {user?.Email}
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
