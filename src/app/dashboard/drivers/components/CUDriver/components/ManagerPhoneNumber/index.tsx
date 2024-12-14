"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function ManagerPhoneNumber() {
  const {
    company:{ManagerPhoneNumber}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleManagerPhoneNumberChange = (e: any) => {
    dispatch(setCUData({ ManagerPhoneNumber: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Manager Phone Number</CustomLabel>
    <CustomInput value={ManagerPhoneNumber} onChange={handleManagerPhoneNumberChange} placeholder='Manager Phone Number' />
</div>
  );
}

export default ManagerPhoneNumber;
