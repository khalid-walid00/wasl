"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";

function ImeiNumber() {
  const {
    vehicle:{IMEINumber}
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleImeiNumberChange = (e: any) => {
    dispatch(setCUData({ IMEINumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2 items-end">
    <CustomLabel bold>IMEI Number</CustomLabel>
    <CustomInput value={IMEINumber} onChange={handleImeiNumberChange} placeholder="Enter IMEI Number" />
  </div>

  );
}

export default ImeiNumber;
