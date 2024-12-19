"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function NameInput() {
  const {
    company: { Name },
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleTitlehange = (e: any) => {
    dispatch(setCUData({ Name: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Company Name</CustomLabel>
    <CustomInput  value={Name} onChange={handleTitlehange} placeholder='Select Company Name' />
</div>
  );
}

export default NameInput;
