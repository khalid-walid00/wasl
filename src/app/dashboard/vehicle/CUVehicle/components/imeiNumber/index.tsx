"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { clearFeiledErrors, completeFormData, setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";
import { BsExclamationOctagon } from "react-icons/bs";
import React from "react";

function ImeiNumber() {
  const {
    vehicle: { ImeiNumber },
    errors
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const error = errors?.find((err: { field: string }) => err.field === "ImeiNumber");

  const handleImeiNumberChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCUData({ ImeiNumber: value }));
    dispatch(completeFormData(value));
    
    const isValid = await validateField(vehicleRegisterSchema, "ImeiNumber", value);
    if (isValid) {
      dispatch(clearFeiledErrors("ImeiNumber"));
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>IMEI Number</CustomLabel>

      <div className="relative flex items-center">
        <CustomInput
          value={ImeiNumber}
          onChange={handleImeiNumberChange}
          placeholder="Enter IMEI Number"
          className={`w-full border ${error && 'border-red-500 pr-10'}`}
        />
        {error && (
          <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        )}
      </div>

      <div
        className={`absolute text-red-500 left-0 top-full transition-all duration-300 ${
          error ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {error?.message}
      </div>
    </div>
  );
}

export default ImeiNumber;
