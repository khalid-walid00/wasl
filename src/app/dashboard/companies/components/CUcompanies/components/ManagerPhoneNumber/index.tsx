"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { clearFeiledErrors, setCUData } from "~/app/dashboard/companies/companies.slice";
import { BsExclamationOctagon } from "react-icons/bs";
import { validateField } from "~/utils/validation";
import { CompanyInfoSchema } from "../../validation/corporate";
import React from "react";

function ManagerPhoneNumber() {
  const {
    company: { ManagerPhoneNumber },
    errors
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const error = errors?.find((err: { field: string }) => err.field === "ManagerPhoneNumber");

  const handleManagerPhoneNumberChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setCUData({ ManagerPhoneNumber: value }));

    const isValid = await validateField(CompanyInfoSchema, "ManagerPhoneNumber", value);
    if (isValid) {
      dispatch(clearFeiledErrors("ManagerPhoneNumber"));
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Manager Phone Number</CustomLabel>

      <div className="relative flex items-center">
        <CustomInput
          value={ManagerPhoneNumber}
          onChange={handleManagerPhoneNumberChange}
          placeholder="Manager Phone Number"
          className={`w-full border ${error ? 'border-red-500 pr-10' : 'border-gray-300'}`}
        />
        {error && (
          <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
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

export default ManagerPhoneNumber;
