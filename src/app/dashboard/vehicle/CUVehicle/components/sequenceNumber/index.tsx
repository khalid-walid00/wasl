"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";

function SequenceNumber() {
  const {
    vehicle:{SequenceNumber}
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleSequenceNumberChange = (e: any) => {
    dispatch(setCUData({ SequenceNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Sequence Number</CustomLabel>
    <CustomInput value={SequenceNumber} onChange={handleSequenceNumberChange} placeholder="Enter Sequence Number" />
  </div>

  );
}

export default SequenceNumber;
