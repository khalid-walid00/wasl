"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";
import React from "react";

interface Props {
  registerType: string;
}

function IdentityNumber({ registerType }: Props) {
  const { company } = useSelector((state: any) => state.companiesSlice);
  const dispatch = useDispatch();

  const defaultPrefix = registerType === "Individual" ? "70" : "1";

  const handleIdentityNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;

    dispatch(setCUData({ IdentityNumber: updatedValue }));

    if (updatedValue.startsWith("70")) {
      dispatch(setCUData({ DateOfBirthHijri: "" }));
    } else {
      dispatch(
        setCUData({
          CommercialRecordNumber: "",
          CommercialRecordIssueDateHijri: "",
          ManagerName: "",
          ManagerPhoneNumber: "",
          ManagerMobileNumber: "",
          DateOfBirthGregorian: "",
        })
      );
    }
  };

  const identityValue =
    company?.IdentityNumber?.startsWith("10") || company?.IdentityNumber?.startsWith("11")
      ? company.IdentityNumber
      : defaultPrefix;

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>Identity Number</CustomLabel>
      <CustomInput
        value={identityValue}
        onChange={handleIdentityNumberChange}
        placeholder="Identity Number"
      />
    </div>
  );
}

export default IdentityNumber;
