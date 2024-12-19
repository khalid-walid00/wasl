"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function ManagerMobileNumber() {
  const {
    company:{ManagerMobileNumber}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleManagerMobileNumberChange = (e: any) => {
    dispatch(setCUData({ ManagerMobileNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Manager Mobile Number</CustomLabel>
    <CustomInput value={ManagerMobileNumber} onChange={handleManagerMobileNumberChange} placeholder='Manager Mobile Number' />
</div>
  );
}

export default ManagerMobileNumber;
