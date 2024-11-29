import React, { useState, ChangeEvent } from "react";
import { Toast, uploadFile } from "~/utils/libraries";
import { useDispatch } from "react-redux";
import ImagePreview from "../../atoms/imagePreview/ImagePreview";
import UploadLabel from "../../molecules/uploadLabel/UploadLabel";

interface UploadImageProps {
  images: any;
  secretKey: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ images, secretKey, }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onSelect = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setLoading(true);
    const files = event.target.files;
    if (!files) {
      setLoading(false);
      return;
    }

    const data = new FormData();
    Array.from(files).forEach((file) => {
      data.append("files", file);
    });

    try {
      const res: any = await uploadFile({ data, secretkey: secretKey });
      Toast.fire({ icon: "success", text: "Images uploaded successfully" });
      const finalImage = res.map(({ image, imageUrl }: { image: string, imageUrl: string }) => ({
        image,
        imageUrl,
      }));
      setLoading(false);
    } catch (err) {
      console.error(err);
      Toast.fire({ icon: "error", text: "Error uploading images" });
      setLoading(false);
    }
  };

  return (
    <div className="mt-[14px]">
      {images.length > 0 ? (
        <div className="w-full my-2 rounded-[8px] border border-[--lineBorder] relative overflow-hidden">
          <ImagePreview images={images} />
          {/* <UploadLabel
            onSelect={onSelect}
            labelText="Drag or select an image"
            placeholderText="Click to choose an image"
          /> */}
        </div>
      ) : (
        <UploadLabel
          onSelect={onSelect}
          labelText="Drag or select an image"
          placeholderText="Click to choose an image"
        />
      )}
      {loading && <div className="text-white">Uploading...</div>}
    </div>
  );
};

export default UploadImage;
