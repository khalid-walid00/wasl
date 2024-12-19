"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { optionsPlateType } from "../options";

function PlateType() {
  const {
    vehicle: { PlateType }
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleSequenceNumberChange = (e: any) => {
    dispatch(setCUData({ PlateType: e }));
  };
  return (
    <div className="flex flex-col gap-2 items-end">
      <CustomLabel bold>Plate Type</CustomLabel>
      <CustomSelector
        value={PlateType}
        options={optionsPlateType}
        onChange={handleSequenceNumberChange}
        placeholder={"Enter Plate Type"}
        isLoading={false}
      />
    </div>


  );
}

export default PlateType;
