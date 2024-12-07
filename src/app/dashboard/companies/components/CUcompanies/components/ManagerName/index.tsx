"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function ManagerName() {
  const {
    company:{ManagerName}
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleManagerNameChange = (e: any) => {
    dispatch(setCUData({ ManagerName: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>Manager Name</CustomLabel>
    <CustomInput value={ManagerName} onChange={handleManagerNameChange} placeholder='Manager Name' />
</div>
  );
}

export default ManagerName;
