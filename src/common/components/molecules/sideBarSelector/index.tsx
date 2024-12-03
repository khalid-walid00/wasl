"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "~/app/appSlice";

interface Props {
  className?: string;
  title?: string,
  content: any,
}

function SideBarSelector({ className, title, content }: Props) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const dispatch = useDispatch();
  const path = usePathname();
  const { showSideBar } = useSelector((state: any) => state.config);
  const local = "ar";

  React.useEffect(() => {
    if (showSideBar) {
      setOpenIndex(null);
    }
  }, [dispatch, showSideBar]);

  const toggleList = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index)); 
  };

  return (
    <div className={`border-b last:border-0 border-[#E9E9E9] flex flex-col ${showSideBar ? "mx-4" : "mx-2"} `}>
      {title && <div className={`text-lg   ${showSideBar ? " p-3 xl:p-3 xl:pb-0 pb-0  " 
        : "text-center xl:pt-3 hidden"} text-mainColor `}>{title}</div>}
      <div className={`flex-col ${!showSideBar && "xl:pb-0"} pb-[16px] pt-3 px-0 flex gap-1`}>
        {content.map((item: any, index: number) => (
          <div key={index} className={`flex flex-col`}>
            {/* القائمه الرئيسيه */}
            <div
              onClick={() => toggleList(index)}
              className={`flex py-2 xl:px-2 text-lg font-bold items-center  cursor-pointer ${showSideBar ? "justify-between pl-2" : "justify-center "
                } ${item.href == path ?
                  "bg-[#8fbfe4a3]  text-mainColor rounded-lg" : "text-blackBlue"} ${item.list?.some((list: any) => list.href == path) ? "bg-[#9dccf0a3]  text-mainColor rounded-lg" : "text-blackBlue"}
                   flex-row-reverse  gap-4 transition-all ${className}`}
            >
              {!item.list?.length ? (
                <Link href={item.href} className={`items-center flex flex-row  gap-2`}>
                  {showSideBar && (
                    <div className="md:text-[14px] text-base self-center">{item.text}</div>
                  )}
                  {item.icon}
                </Link>
              ) : (
                <div className={`flex ${local === "ar" ? "flex-row" : "flex-row-reverse "} gap-2`}>
                  {item.icon}
                  {showSideBar && (
                    <div className=" self-center">{item.text}</div>
                  )}
                </div>
              )}

              {item.list?.length && showSideBar && (
                <svg
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleList(index);
                  }}
                  className={`cursor-pointer  w-6 h-6 transition-transform duration-300 ${openIndex === index ? "-rotate-90" : ""}`}
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5695 6.60743C14.8853 6.93587 14.8751 7.45813 14.5466 7.77394L10.2151 11.8542L14.5466 15.9346C14.8751 16.2504 14.8853 16.7726 14.5695 17.1011C14.2537 17.4295 13.7314 17.4397 13.403 17.1239L8.45299 12.4489C8.29122 12.2934 8.1998 12.0787 8.1998 11.8542C8.1998 11.6298 8.29122 11.4151 8.45299 11.2596L13.403 6.58456C13.7314 6.26876 14.2537 6.279 14.5695 6.60743Z" 
                  fill={item.list?.some((list: any) => list.href == path) ? "#008ffb" : "#333333"} fillOpacity="0.77"
                   stroke={item.list?.some((list: any) => list.href == path) ? "#008ffb" : "#333333"} strokeOpacity="0.77" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {item.number && (
                <div className="bg-white flex justify-center items-center rounded-lg w-[25px] h-[25px] text-black">
                  {item.number}
                </div>
              )}
            </div>
            {/* العناصر الي بالداخل */}
            <div
              className={` ${local === "ar" ? "px-[13px]" : "px-[13px] pl-3"} 
              flex flex-col gap-[15px] transition-all duration-500 ease-in-out overflow-hidden  ${(openIndex === index && item.list) ? "max-h-[500px] opacity-100 pt-[18px] pb-3" : "max-h-0 opacity-0"}`}
            >
              {item.list && showSideBar &&
                item.list.map((subItem: any, subIndex: any) => (
                  <Link
                    href={subItem.href}
                    key={subIndex}
                    className={`flex ${local === "ar" ? "flex-row" : "flex-row-reverse "} xl:text-[14px]  gap-3 items-center px-2 transition-opacity duration-300 delay-500 ${path === subItem.href ? "scale-[1.01] text-mainColor" : "text-blackBlue"}`}
                  >
                    <svg width="19" height="6" viewBox="0 0 19 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 3.00024H3.5" stroke={path === subItem.href ? "#008ffb" : "#333333"} strokeLinecap="round" />
                      <circle cx="9.5" cy="3.00024" r="3" fill={path === subItem.href ? "#008ffb" : "#333333"} />
                      <path d="M15.5 3.00024H18.5" stroke={path === subItem.href ? "#008ffb" : "#333333"} strokeLinecap="round" />
                    </svg>
                    {showSideBar && subItem.text}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarSelector;
