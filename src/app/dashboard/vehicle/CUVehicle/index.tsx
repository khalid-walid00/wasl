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

const CUVehicle = () => {
  const dispatch = useDispatch();
  const { showModel, vehicleId } = useSelector((state: any) => state.vehiclesSlice);

  useEffect(() => {
    if (vehicleId) {
      dispatch(fetchOneData(vehicleId));
    } else {
      dispatch(fetchOneData(null));
      dispatch(clearOneData());
    }
  }, [vehicleId, dispatch]);

  const toggleModelHandler = () => {
    dispatch(clearVehicle());
  };
  return (
    <SideAction
      handleAction={() => dispatch(sendData())}
      isLoading={false}
      showModel={showModel}
      loadingScreen={false}
      toggleModelHandler={toggleModelHandler}
    >
      <div className="flex flex-col gap-y-4 min-h-screen">
      <SequenceNumber/>
      <PlateType/>
      <ImeiNumber/>
      <OperationCompanyId/>
      <Activity/>
      <VehiclePlate/>
      </div>
    </SideAction>
  );
};

export default CUVehicle;
