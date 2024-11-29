import Image from "next/image";
import Swal from "sweetalert2";

export default function DeleteManyProducts() {
  const deleteHandler = () => {
    Swal.fire({
      title: `هل انت متأكد حذف الشركة ؟`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e91e63",
      cancelButtonColor: "#4caf50",
      confirmButtonText: "نعم متأكد",
      cancelButtonText: "لا",
      timerProgressBar: true,
    }).then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <div
        onClick={deleteHandler}
        className="cursor-pointer   items-center justify-end gap-1 bg-[--linerMainColor] text-mainColor font-bold  p-1 rounded-[7px] hidden md:flex px-2"
      >
        <Image
          width={16}
          height={16}
          className="w-4 h-4 filter brightness-0 text-mainColor"
          src="/assets/icons/svg/delete.svg"
          alt="icon"
        />
        حذف الكل
      </div>
    </>
  );
}
