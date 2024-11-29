import { useState, ChangeEvent } from "react";
import { Toast, uploadFile } from "~/utils/libraries";

interface UseImageUploaderProps {
  secretkey: string;
  updateImages: (images: any[]) => void;
  successMessage?: string; 
}

const useImageUploader = ({
  secretkey,
  updateImages,
  successMessage = "تم حفظ الصور"
}: UseImageUploaderProps) => {
  const [loading, setLoading] = useState(false);

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
      const res: any = await uploadFile({ data, secretkey });
      Toast.fire({ icon: "success", text: successMessage });

      const finalImages = res.map((file: any) => ({
        image: file.image,
        imageUrl: file.imageUrl,
      }));

      updateImages(finalImages);
    } catch (err) {
      console.error(err);
      Toast.fire({ icon: "error", text: "حدث خطأ أثناء رفع الصور" });
    } finally {
      setLoading(false);
    }
  };

  return { onSelect, loading };
};

export default useImageUploader;
