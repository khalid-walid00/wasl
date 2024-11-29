import React, { ChangeEvent } from "react";
import { ClockLoader } from "react-spinners";

interface UploadFileProps {
  onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  withImage?: boolean;
  loading?: boolean;
  extensions?: string[];
  value?: any;
}

const UploadFile: React.FC<UploadFileProps> = ({
  onSelect,
  withImage = true,
  loading = false,
  extensions = ["*"],
  value,
}) => {

  // إعداد قائمة الامتدادات ليتم استخدامها في خاصية accept
  const acceptedExtensions =
    extensions.length > 0 ? extensions.map((ext) => `.${ext}`).join(", ") : "*";

  return (
    <label className="cursor-pointer absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-800 z-10">
      <input
        type="file"
        className="w-0 h-0 invisible"
        onChange={onSelect}
        accept={acceptedExtensions}
        multiple
      />
      <div className={"py-2 flex flex-col items-center"}>
        {loading ? (
          <ClockLoader size={35} color="#008ffb" />
        ) : (
          <>
            {withImage && (
              <div className="flex flex-col items-center gap-2">
                <svg
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3561 22.8607H7.38756C4.87269 22.8607 2.83398 21.1245 2.83398 18.5787C2.83398 16.0329 4.87269 13.9691 7.38756 13.9691C7.55857 13.9691 7.72739 13.9787 7.89351 13.9973V13.9691H7.95614C7.9148 13.6336 7.89351 13.2917 7.89351 12.9448C7.89351 8.41893 11.5179 4.75 15.9887 4.75C19.0163 4.75 21.6557 6.43243 23.0443 8.92409C23.3836 8.87356 23.7308 8.84739 24.084 8.84739C27.996 8.84739 31.1673 12.0577 31.1673 16.0178C31.1673 19.6301 28.5286 22.2911 25.0959 22.7881H21.4277M16.4947 14.4813V30.25M16.4947 30.25L12.9056 26.7094M16.4947 30.25L19.9889 26.7094"
                    stroke="#9D9D9D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>


                <div className="text-[#9D9D9D]">
                  uploadFile {extensions.length > 0 ? `(${extensions.join(", ")})` : null}
                </div>
                {value ? <div className="text-[#9D9D9D]"> {value.name ?? value} </div> : null}
              </div>
            )}
          </>
        )}
      </div>
    </label>
  );
};

export default UploadFile;
