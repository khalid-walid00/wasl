"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { clearFeiledErrors, setCUData } from "~/app/dashboard/companies/companies.slice";
import { useEffect } from "react";
import { fetchActivity } from "~/app/appSlice";
import { validateField } from "~/utils/validation";
import { CompanyInfoSchema } from "../../validation/corporate";
import React from "react";

function CompanyActivity() {
  const {
    company: { Activity },
    errors
  } = useSelector((state: any) => state.companiesSlice);

  const {
    Activity: optionsActivity,
    ActivityLoading
  } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();

  const error = errors?.find((err: { field: string }) => err.field === "Activity");

  const ActivityChange = async (e: any) => {
    dispatch(setCUData({ Activity: e }));

    const isValid = await validateField(CompanyInfoSchema, "Activity", e);
    if (isValid) {
      dispatch(clearFeiledErrors("Activity"));
    }
  };

  useEffect(() => {
    dispatch(fetchActivity());
  }, [dispatch]);

  return (
    <div className="relative flex flex-col justify-between">
      <CustomLabel bold>Activity</CustomLabel>

      <div className="relative h-[40px]">
        <CustomSelector
          value={Activity}
          options={optionsActivity}
          onChange={ActivityChange}
          placeholder="Select Type"
          isLoading={ActivityLoading}
          className={`border ${error ? 'border-red-500 pr-10' : 'border-gray-300'}`}
        />
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

export default CompanyActivity;
