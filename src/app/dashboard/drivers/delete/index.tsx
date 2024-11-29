import Image from "next/image";
import Swal from "sweetalert2";

export default function DeleteOne({_id}:any) {
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
          className="flex cursor-pointer text-xs items-center  gap-1 group  rounded-xl "
          onClick={deleteHandler}
        > 
          <Image
            width={16}
            height={16}
            className="w-4 h-4  group-hover:filter filter-none brightness-0"
            src="/assets/icons/svg/delete.svg"
            alt="icon"
            />
            حذف المستخدم
     
        </div>
    
    </>
  );
}
