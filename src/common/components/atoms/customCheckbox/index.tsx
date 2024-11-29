import React from "react";

const CustomCkeckbox = ({ isChecked, onChange }:any) => (
  <div className="flex items-center cursor-pointer" onClick={onChange}>
    <div
      className={`w-[24px] h-[24px] flex justify-center items-center rounded-[4px] border ${
        isChecked ? "bg-[#008ffb] border-transparent" : "border-mainColor"
      }`}
    >
      {isChecked && (
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_4829_52353)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.8851 0.996566C14.4392 0.380801 15.3877 0.330883 16.0034 0.885072C16.6192 1.43926 16.6691 2.38769 16.1149 3.00346L7.11494 13.0035C6.54003 13.6422 5.54703 13.6684 4.93934 13.0607L0.93934 9.06067C0.353553 8.47489 0.353553 7.52514 0.93934 6.93935C1.52513 6.35357 2.47487 6.35357 3.06066 6.93935L5.94271 9.8214L13.8851 0.996566Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_4829_52353"
              x="-1.5"
              y="-0.5"
              width="20"
              height="17"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_4829_52353"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_4829_52353"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  </div>
);

export default CustomCkeckbox;
