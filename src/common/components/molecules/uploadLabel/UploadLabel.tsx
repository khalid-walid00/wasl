import React from "react";
import Image from "next/image";
import FileInputAtom from "../../atoms/fileInput/FileInput";

interface UploadLabelProps {
  onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  labelText: string;
  placeholderText: string;
}

const UploadLabel: React.FC<UploadLabelProps> = ({ onSelect, multiple, labelText, placeholderText }) => (
  <label className="cursor-pointer absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-800 z-10">
    <FileInputAtom onSelect={onSelect} multiple={multiple} />
    <Image
      width={64}
      height={64}
      src="/assets/icons/uploadFile.png"
      alt="Upload File"
    />
    <div className="text-white text-[14px]">{labelText}</div>
    <div className="text-LightGray text-[12px]">{placeholderText}</div>
  </label>
);

export default UploadLabel;
