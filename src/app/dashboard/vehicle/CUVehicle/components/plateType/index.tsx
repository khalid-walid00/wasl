"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";

function PlateType() {
  const {
    vehicle:{PlateType}
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleSequenceNumberChange = (e: any) => {
    dispatch(setCUData({ PlateType: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2 items-end">
    <CustomLabel bold>Plate Type</CustomLabel>
    <CustomInput value={PlateType} onChange={handleSequenceNumberChange} placeholder="Enter Plate Type" />
  </div>


  );
}

export default PlateType;
