import Image from "next/image";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Toast } from "~/utils/libraries";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { deleteItem } from "../companies.slice";

export default function DeleteOne({ _id }: any) {
  const dispatch = useDispatch();
  const deleteHandler =  () => {
    const endpoint = `operationCompany/delete?operationCompanyId=${_id}`;


    Swal.fire({
      title: `are you sure you want to delete this company ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e91e63",
      cancelButtonColor: "#4caf50",
      confirmButtonText: "yes",
      cancelButtonText: "no",
      timerProgressBar: true,
    }).then(async() => {
      const response = await fetchDataFromApi(endpoint, null, "DELETE", null)
      const { StatusCode, Message } = response
      if (StatusCode === 200) {
        Toast.fire({
          icon: "success",
          title:Message ,
          showConfirmButton: false,
        })
        dispatch(deleteItem(_id));
      }
        else{
        Toast.fire({
          icon: "error",
          title:Message ,
          showConfirmButton: false,
        })
      }
     })
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
       delete company 

      </div>

    </>
  );
}
