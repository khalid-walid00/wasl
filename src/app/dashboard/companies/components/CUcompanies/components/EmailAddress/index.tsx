"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function EmailAddress() {
  const {
    company:{EmailAddress}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleEmailAddressChange = (e: any) => {
    dispatch(setCUData({ EmailAddress: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Email Address</CustomLabel>
    <CustomInput value={EmailAddress} onChange={handleEmailAddressChange} placeholder='Email' />
</div>
  );
}

export default EmailAddress;
