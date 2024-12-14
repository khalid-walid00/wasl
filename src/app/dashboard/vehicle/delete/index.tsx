import Image from "next/image";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { deleteItem } from "../vehicle.slice";
import { Toast } from "~/utils/libraries";

export default function DeleteOne({ _id }: any) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    const endpoint = `vehicles/delete?VehicleId=${_id}`;


    Swal.fire({
      title: `are you sure you want to delete this Vehicle ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e91e63",
      cancelButtonColor: "#4caf50",
      confirmButtonText: "yes",
      cancelButtonText: "no",
      timerProgressBar: true,
    }).then((result) => {
      fetchDataFromApi(endpoint, null, "DELETE", null).then(({ StatusCode }: any) => {
        if (StatusCode === 200) {
          Toast.fire({
            icon: "success",
            title: "deleted successfully",
            showConfirmButton: false,
          })
          dispatch(deleteItem(_id));

        }
      }).catch((err) => {
        Toast.fire({
          title: err.message,
          icon: "error",
        });
      });
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
       delete vehicle 

      </div>

    </>
  );
}