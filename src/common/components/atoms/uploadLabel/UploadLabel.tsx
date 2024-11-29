import React, { ChangeEvent } from "react";
import Image from "next/image";
import { ClockLoader } from "react-spinners"; 

interface UploadLabelProps {
  onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  withImage?: boolean;
  loading?: boolean;
}

const UploadLabel: React.FC<UploadLabelProps> = ({ onSelect, withImage = true, loading = false }) => {

  return (
    <label className="cursor-pointer absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-800 z-10">
      <input
        type="file"
        className="w-0 h-0 invisible"
        onChange={onSelect}
        accept="image/*"
        multiple
      />
      <div className={"py-2 flex flex-col items-center"}>
        {loading ? (
          <ClockLoader size={35} color="#008ffb" />
        ) : (
          <>
            {withImage && (
              <>
                <Image src='/assets/icons/svg/add-image.svg' width={60} height={54} alt="upload-image-icon" />
                <span className="t">
                  اضف صورة
                </span>
              </>
            )}
            <span className="text-[--subLiner] text-[14px]">“اضغط لاختيار صورة”</span>
          </>
        )}
      </div>
    </label>
  );
};

export default UploadLabel;
