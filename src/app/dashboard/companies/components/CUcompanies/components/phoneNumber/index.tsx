"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function PhoneNumber() {
  const {
    company:{PhoneNumber}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleIdentityNumberhange = (e: any) => {
    dispatch(setCUData({ PhoneNumber: e.target.value }));
  };

  return (
    <div className="flex justify-end flex-col gap-2">
    <CustomLabel bold>Phone Number</CustomLabel>
    <CustomInput value={PhoneNumber} onChange={handleIdentityNumberhange} placeholder='Phone Number' />
</div>
  );
}

export default PhoneNumber;
