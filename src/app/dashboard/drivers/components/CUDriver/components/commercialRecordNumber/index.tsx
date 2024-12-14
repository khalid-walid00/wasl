"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function CommercialRecordNumber() {
  const {
    company:{CommercialRecordNumber}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleIdentityNumberhange = (e: any) => {
    dispatch(setCUData({ CommercialRecordNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>Commercial Record Number</CustomLabel>
      <CustomInput value={CommercialRecordNumber} onChange={handleIdentityNumberhange} placeholder='Commercial Record Number' />
    </div>
  );
}

export default CommercialRecordNumber;
