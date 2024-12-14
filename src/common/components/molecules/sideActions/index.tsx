import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../../atoms/button";

interface SideActionProps {
  showModel: boolean;
  toggleModelHandler: () => void;
  isLoading: boolean;
  handleAction: () => void;
  children: React.ReactNode;
  loadingScreen?: boolean;
}

const SideAction: React.FC<SideActionProps> = ({
  showModel,
  toggleModelHandler,
  isLoading,
  handleAction,
  children,
  loadingScreen = false,
}) => {
  return (
    <>
      <div className={`newSide -left-full border-r-2  border-whiteGray  ${ showModel && " left-0"} `} style={{ direction:  "rtl" }}>
        {loadingScreen ? (
          <div className="flex justify-center items-center  h-full">
            <ClipLoader color="#36d7b7" size={40} />
          </div>
        ) : (
          <div className="pt-10 pb-4 px-4 flex flex-col gap-10">
            <div className={`modalHexad flex  items-center flex-row  gap-1 text-2xl font-bold w-full  `}>
              <button className=" w-[40px] h-[40px] rounded-full flex items-center justify-center bg-mainColor" onClick={toggleModelHandler} aria-label="Back">
                 <IoArrowBackSharp className="text-white" size={24} /> 
              </button>
              
            </div>
            <div className="newBody flex flex-col gap-6 justify-between text-center min-h-[90vh]">
              <div className="">
                {children}
              </div>
              <Button
                loading={isLoading}
                style={{ height: "50px" }}
                className="text-white bg-mainColor w-full "
                onClick={handleAction}>
                ارسال
              </Button>
            </div>
          </div>
        )}
      </div>

      {showModel && (
        <div
          className="sidebar-overlay-left"
          onClick={toggleModelHandler}
          role="button"
          aria-label="Close Overlay"
        ></div>
      )}
    </>
  );
};

export default SideAction;
