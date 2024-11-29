import ClipLoader from "react-spinners/ClipLoader";

export function LoadingScreen() {
  return (
    <div className="flex sweet-loading text-center min-h-screen/2 justify-center align-middle items-center min-h-screen">
      <ClipLoader color="#36d7b7" size={40} />
    </div>
  );
}
