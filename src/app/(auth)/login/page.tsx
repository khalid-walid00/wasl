"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import LoginTemplate from "~/common/components/templates/login";

const swipperData = [
  {
    id: 3,
    image: "/assets/images/swipper1.png",
    title: "testtest",
    description:
      "testtesttesttesttesttesttest",
  },
  {
    id: 2,
    image: "/assets/images/swipper3.png",
    title: "testtest",
    description:
      "testtesttesttest",
  },
  {
    id: 1,
    image: "/assets/images/swipper4.png",
    title: "testtesttesttest",
    description:
      "testtesttesttesttesttesttesttesttest",
  },
];
const Page = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <svg
        className="z-[100]   md:flex hidden absolute top-0 left-0"
        width="177"
        height="183"
        viewBox="0 0 177 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M144.008 182.716C128.819 13.5279 23.914 -12.1933 -59.2079 5.96943C-76.4429 11.4083 -90.8349 36.5943 -3.07479 81.671L1.16518 39.1299L14.4525 92.9124L48.9498 114.047L55.2377 73.2141L64.9042 129.117C117.356 161.006 144.008 182.716 144.008 182.716Z"
          fill="black"
          fill-opacity="0.19"
        />
        <path
          d="M127.962 132.149C84.1524 34.6645 13.704 10.5121 -67.06 16.5464C1.20584 23.5782 70.3646 30.1069 127.962 132.149Z"
          fill="white"
        />
      </svg>
      <div className="">
        <div className="relative justify-between h-screen grid grid-cols-1 md:grid-cols-2 w-full lg:container px-5 gap-x-12 xl:gap-x-[110px] items-center content-center">
          <div className=" h-full pl-2 py-10">
            <LoginTemplate />
          </div>
          <div className="sticky top-0 hidden md:block">
            <div className="relative h-full">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="mySwiper h-full"
              >
                {swipperData.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      width={400}
                      height={380}
                      src={item.image}
                      alt=" logo"
                    />
                    <div className="text-[24px] font-bold text-mainColor ">
                      {item.title}
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10/12 text-[18px] text-grayG text-center">
                        {item.description}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
