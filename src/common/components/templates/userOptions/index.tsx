"use client";
import DropDown from "../../molecules/dropDown";
import UserOptionsOrganism from "../../organisms/userOptions";
import { FiLogOut } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";
import logout from "~/features/auth/logout";

function UserOptionsTemplates({}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const userOptionsList = [
    {
      title: "profile",
      path: "/profile",
      logo: <FaRegUser size={20} color="#008ffb" />,
    },
    {
      title: "logout",
      onClick: logout,
      logo: <FiLogOut size={20} color="#008ffb" />,
    },
  ];

  return (
    <DropDown
      setIsOpen={setIsOpen}
      containerClassName="bg-transparent shadow-[0px_0px_15px_rgba(0,0,0,0.1)]  w-fill "
      className="w-fill flex justify-end  px-0 py-0  "
      itemToggle={
        <div className="flex gap-3">
         
          <img
            className="cursor-pointer active:scale-95 rounded-full
            active:bg-grayG active:bg-opacity-35  h-[44px] w-[44px]
              transition-all duration-300  object-fill "
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="logo"
            width={40}
            height={40}
          /> 
          <div className=" lg:flex hidden  flex-col items-end">
            <div className=" flex gap-2">
              <div className=" font-bold flex-1 text-start">name</div>
              <svg
                className={`${
                  isOpen ? "rotate-180" : ""
                } duration-300 transition-all`}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.23017 7.45938C5.52875 7.17228 6.00353 7.18159 6.29063 7.48017L10 11.4179L13.7094 7.48017C13.9965 7.18159 14.4713 7.17228 14.7698 7.45938C15.0684 7.74647 15.0777 8.22125 14.7906 8.51983L10.5406 13.0198C10.3992 13.1669 10.204 13.25 10 13.25C9.79599 13.25 9.60078 13.1669 9.45938 13.0198L5.20938 8.51983C4.92228 8.22125 4.93159 7.74647 5.23017 7.45938Z"
                  fill="#008ffb"
                  stroke="#008ffb"
                  stroke-width="0.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className=" w-full text-[#979797] text-sm text-start font-bold ">
              {"role"}
            </div>
          </div>
        </div>
      }
    >
      <UserOptionsOrganism data={userOptionsList} />
    </DropDown>
  );
}

export default UserOptionsTemplates;
