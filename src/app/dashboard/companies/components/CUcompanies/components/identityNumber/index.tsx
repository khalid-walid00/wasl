"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";
import React from "react";


function IdentityNumber() {
  const { company ,companyType } = useSelector((state: any) => state.companiesSlice);
  const dispatch = useDispatch();
  const defaultPrefix = companyType === "Corporate" ? "70" : "1";


  const handleIdentityNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;

    dispatch(setCUData({ IdentityNumber: updatedValue }));
  };

  
  const identityValue =
    company?.IdentityNumber?.startsWith("10") || company?.IdentityNumber?.startsWith("11") ||company?.IdentityNumber?.startsWith("70") 
      ? company.IdentityNumber
      : defaultPrefix;

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>{companyType === "Corporate"? "Company ID":"Owner ID "}</CustomLabel>
      <CustomInput
        value={identityValue}
        onChange={handleIdentityNumberChange}
        placeholder="Identity Number"
      />
    </div>
  );
}

export default IdentityNumber;
