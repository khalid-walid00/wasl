import React from "react";

function CustomUnRead({ children, className = "", style }: any) {
  return (
    <div
      style={style}
      className={`h-[16px]  w-[16px] z-50 bg-[--mainColor] absolute top-[-5px] rounded-full flex items-center justify-center ${className}`}
    >
      <span className="text-[10px] font-bold text-white flex items-center  relative top-[0.5px] justify-center h-full w-full">
        {children}
      </span>
    </div>
  );
}

export default CustomUnRead;
