import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

function SwipperSlide({ item }: any) {

  return (
    <SwiperSlide
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
        alt="logo"
      />
      <div className="text-[24px] font-bold text-mainColor ">
        {item.title}
      </div>
      <div className="flex justify-center">
        <div className="w-7/12 text-[18px] text-grayG text-center">
          {item.description}
        </div>
      </div>
    </SwiperSlide>
  );
}

export default SwipperSlide;