"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function ExtensionNumber() {
  const {
    company: { ExtensionNumber },
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleExtensionNumberChange = (e: any) => {
    dispatch(setCUData({ ExtensionNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>Extension Number</CustomLabel>
      <CustomInput value={ExtensionNumber} onChange={handleExtensionNumberChange} placeholder='Extension Number' />
    </div>
  );
}

export default ExtensionNumber;
