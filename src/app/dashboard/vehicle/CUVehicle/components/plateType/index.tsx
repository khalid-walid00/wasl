"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { clearFeiledErrors, setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { optionsPlateType } from "../options";
import { BsExclamationOctagon } from "react-icons/bs";
import React from "react";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";

function PlateType() {
  const {
    vehicle: { PlateType },
    errors
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const error = errors?.find((err: { field: string }) => err.field === "PlateType");

  const handlePlateTypeChange = async (e: any) => {
    dispatch(setCUData({ PlateType: e }));
console.log("e",e);

    const isValid = await validateField(vehicleRegisterSchema, "PlateType", e);
    if (isValid) {
      dispatch(clearFeiledErrors("PlateType"));
    }
  };
console.log("error",error);
  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Plate Type</CustomLabel>

      <div className="relative flex items-center">
        <CustomSelector
          value={PlateType}
          options={optionsPlateType}
          onChange={handlePlateTypeChange}
          placeholder={"Enter Plate Type"}
          isLoading={false}
          className={`w-full border ${error && 'border-red-500 pr-10'}`}
        />
        {error && (
          <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
        )}
      </div>

      <div
        className={`absolute text-red-500 left-0 top-full transition-all duration-300 ${
          error ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {error?.message}
      </div>
    </div>
  );
}

export default PlateType;
