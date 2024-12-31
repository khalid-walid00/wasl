"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { clearFeiledErrors, completeFormData, setCUData } from "~/app/dashboard/companies/companies.slice";
import { Tooltip } from "@nextui-org/react";
import { BsExclamationOctagon } from "react-icons/bs";
import { validateField } from "~/utils/validation";
import { CompanyInfoSchema } from "../../validation/corporate";
import React from "react";
import { OwnerInfoSchema } from "../../validation/individual";

function IdentityNumber() {
  const { company, companyType, errors } = useSelector((state: any) => state.companiesSlice);
  const dispatch = useDispatch();
  const defaultPrefix = companyType === "Corporate" ? "70" : "1";
  const validationInfoSchema = companyType === "Corporate" ?  CompanyInfoSchema : OwnerInfoSchema ;

  const error = errors?.find((err: { field: string }) => err.field === "IdentityNumber");

  const handleIdentityNumberChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let updatedValue = e.target.value;

    if (!updatedValue.startsWith(defaultPrefix)) {
      updatedValue = defaultPrefix + updatedValue.replace(/^(10|11|70|1)/, "");
    }

    updatedValue = updatedValue.replace(/\D/g, "");

    dispatch(setCUData({ IdentityNumber: updatedValue }));
    dispatch(completeFormData(updatedValue));

    const isValid = await validateField(validationInfoSchema as any, "IdentityNumber", updatedValue);
    if (isValid) {
      dispatch(clearFeiledErrors("IdentityNumber"));
    }
  };

  const identityValue =
    company?.IdentityNumber?.startsWith("10") ||
    company?.IdentityNumber?.startsWith("11") ||
    company?.IdentityNumber?.startsWith("70")
      ? company.IdentityNumber
      : defaultPrefix;

  return (
    <div className="flex flex-col gap-2 relative">
      <CustomLabel bold>{companyType === "Corporate" ? "Company ID" : "Owner ID"}</CustomLabel>
      <div className="relative flex items-center">
        <CustomInput
          value={identityValue}
          onChange={handleIdentityNumberChange}
          placeholder="Identity Number"
          className={`border ${error ? 'border-red-500 pr-10' : 'border-gray-300'}`}
        />
        {error && (
          <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        )}
      </div>

      <div
        className={`absolute text-red-500 top-full transition-opacity duration-300 ${
          error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        {error?.message}
      </div>
    </div>
  );
}

export default IdentityNumber;
