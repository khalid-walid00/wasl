import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../atoms/button";
interface Props {
  title: string;
  text?: string;
  img?: any;
  btn?: string;
  link?: string;
  backColor?:string
  event?: () => void;
}
function EmptySection({ title, text, img, link, btn, event,backColor="#fff" }: Props) {
  return (
    <div  style={{ backgroundColor: backColor }} className={`flex items-center justify-center flex-col   `}  >
      <div
        className=" container  "
      >
        <div className="flex flex-wrap items-center   ">
          <div className="w-8/12 mx-auto  ">
            <div className=" flex items-center justify-center flex-col " >
              <div className="">
                <Image
                  width={325}
                  height={325}
                  src={img}
                  alt={title}
                  className=" object-cover  pb-[18px] "
                />
                <h1 className=" text-[24px] font-[7oo] text-center pb-[6px] ">{title}</h1>
              </div>
              <div>
                <p className=" text-[16px] font-[400] text-[#AEAEAE] " > {text} </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap items-center ">
          <div className="w-3/12 mx-auto ">
            <div className="pt-[24px] " >

              {btn && link || event ? (
                link ? (
                  <Link
                    href={link}
                    className=""
                  >
                    <Button className="text-white w-full h-[50px] bg-[--mainColor] " >
                    {btn} 
                    </Button>
                  </Link>
                ) : (
                     <Button className="text-white w-full h-[50px] bg-[--mainColor] " >
                    {btn} 
                    </Button>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EmptySection;
