"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { useEffect } from "react";
import { fetchActivity } from "~/app/appSlice";
import { setCUData, clearFeiledErrors, completeFormData } from "../../../vehicle.slice";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";
import { BsExclamationOctagon } from "react-icons/bs";
import React from "react";

function DriverActivity() {
  const { vehicle: { Activity }, errors } = useSelector((state: any) => state.vehiclesSlice);
  const { Activity: optionsActivity, ActivityLoading } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();

  const error = errors?.find((err: { field: string }) => err.field === "Activity");

  const ActivityChange = async (e: any) => {
    dispatch(setCUData({ Activity: e }));
    dispatch(completeFormData(e));

    const isValid = await validateField(vehicleRegisterSchema, "Activity", e);
    if (isValid) {
      dispatch(clearFeiledErrors("Activity"));
    }
  };

  useEffect(() => {
    dispatch(fetchActivity());
  }, [dispatch]);

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Activity</CustomLabel>

      <div className="relative flex items-center h-[40px]">
        <CustomSelector
          value={Activity}
          options={optionsActivity}
          onChange={ActivityChange}
          placeholder={"Select Activity"}
          isLoading={ActivityLoading}
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

export default DriverActivity;
