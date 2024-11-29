import React from "react";
import Image from "next/image";

interface ImageItemProps {
  image: any;
  index: number;
  onRemove: () => void;
  size?: string;
}

const ImageItem = ({ image, index, onRemove, size = "100px" }: ImageItemProps) => {
  return (
    <div
      className={`overflow-hidden border-[1px] border-gray-600 rounded-lg shadow-md relative`}
      style={{ width: size, height: size }}
    >
      <div className="absolute top-1 left-1">
        <button onClick={onRemove}>
          <Image
            className="self-end cursor-pointer"
            src="/assets/icons/delete.svg"
            width={30}
            height={30}
            alt={`Delete image ${index + 1}`}
          />
        </button>
      </div>
      <img
        src={image.imageUrl}
        className="h-full w-full object-contain"
        alt={`Uploaded Image ${index + 1}`}
      />
    </div>
  );
};

export default ImageItem;
