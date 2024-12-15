"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideAction from "~/common/components/molecules/sideActions";
import { clearOneData, clearVehicle, fetchOneData, sendData } from "../vehicle.slice";
import SequenceNumber from "./components/sequenceNumber";
import PlateType from "./components/plateType";
import ImeiNumber from "./components/imeiNumber";
import VehiclePlate from "./components/vehiclePlate";
import OperationCompanyId from "./components/operationCompanyId";
import Activity from "./components/activity";
import HeadTable from "~/common/components/molecules/headTable";
import Button from "~/common/components/atoms/button";

const CUVehicle = ({_id}:any) => {
  const dispatch = useDispatch();
  // const { showModel } = useSelector((state: any) => state.vehiclesSlice);
  useEffect(() => {
    if (_id) {
      dispatch(fetchOneData(_id));
    } else {
      dispatch(fetchOneData(null));
      dispatch(clearOneData());
    }
  }, [_id, dispatch]);

  // const toggleModelHandler = () => {
  //   dispatch(clearVehicle());
  // };

  const handeleSendData = (e: any) => {
    dispatch(sendData());
  }
  const handeleClearData = (e: any) => {
    dispatch(clearOneData());
  }
  return (
    // <SideAction
    //   handleAction={() => dispatch(sendData())}
    //   isLoading={false}
    //   showModel={showModel}
    //   loadingScreen={false}
    //   toggleModelHandler={toggleModelHandler}
    // >
    //   <div className="flex flex-col gap-y-4 min-h-screen">
    //   <SequenceNumber/>
    //   <PlateType/>
    //   <ImeiNumber/>
    //   <OperationCompanyId/>
    //   <Activity/>
    //   <VehiclePlate/>
    //   </div>
    // </SideAction>
    <div className="bg-transparent py-[18px] flex flex-col gap-10">
    <HeadTable title={`${_id ? "Update Vehicle" : "Create New Vehicle"}`} description={`${_id ? "Update a vehicle" : "Create a new vehicle"}`} />
    <div className="flex flex-col  justify-between gap-8 container">
      <div className="flex items-center flex-col w-full gap-6 bg-white rounded-lg border border-grayWhite p-4">
        <div className="text-2xl font-bold">Company Information</div>
        <div className="flex flex-col gap-y-4 ">
      <SequenceNumber/>
      <PlateType/>
      <ImeiNumber/>
      <OperationCompanyId/>
      <Activity/>
      <VehiclePlate/>
      </div>
      <div className="flex flex-col w-5/12 gap-6">
            <Button onClick={handeleSendData} primary className='px-8 w-full'>
              Register
            </Button>
            <Button onClick={handeleClearData} className='px-8 w-full'>
              Clear
            </Button>
          </div>
      </div>

    </div>

  </div>
  );
};

export default CUVehicle;
