import { Toast } from "~/utils/libraries";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { cookiesValues } from "~/config/constant";
import { store } from "~/redux/persist";
import { setUser } from "~/app/appSlice";


const logout = async () => {
  Swal.fire({
    title: "هل انت متأكد من تسجيل الخروج؟",
    text: "يمكنك ترك الموقع بدون عمل تسجيل خروج",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "نعم، تسجيل الخروج",
    cancelButtonText: "لا",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        Cookies.remove(cookiesValues.GlobalToken);
        store.dispatch(setUser(null));
        window.location.href = "/login";
        Toast.fire({ icon: "success", title: "تم تسجيل الخروج بنجاح." });
      } catch (error) {
        console.error("🚀 ~ logout ~ error:", error);
        Toast.fire({ icon: "error", title: "حدث خطأ أثناء تسجيل الخروج." });
      }
    }
  });
};

export default logout;
