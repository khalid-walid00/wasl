import React from "react";
import Image from "next/image";

interface ImagePreviewProps {
  images: any;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ images }) => (
  <div className="w-full border-b border-[--lineBorder] p-2 flex items-center flex-wrap gap-2">
    {images.map((image:any, index:number) => (
      <Image
        key={index}
        src={image.imageUrl}
        alt={`Uploaded image ${index + 1}`}
        width={64}
        height={64}
        className="rounded"
      />
    ))}
  </div>
);

export default ImagePreview;
