import dynamic from "next/dynamic";
import loading from "../../../../../public/assets/animations/empty2.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function EmptyTable({ text = "لا توجد أي بيانات" }) {
  return (
    <div className="flex items-center justify-center align-middle text-center py-5 ">
      <div>
        <div>
          <Lottie animationData={loading} style={{ width: 400, height: 400 }} />
          <p className="text-white text-2xl font-bold">{text}</p>
        </div>
      </div>
    </div>
  );
}
