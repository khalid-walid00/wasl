"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";

function OperationCompanyId() {
  const {vehicle:{OperationCompanyId}} = useSelector((state: any) => state.vehiclesSlice);
  const {items:{Data}} = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleOperationCompanyIdChange = (e: any) => {
    dispatch(setCUData({ OperationCompanyId: e }));
  };
   const options = Data.map((item: any) => ({value: item.Id, label: item.Name}));
  return (
    <div className="flex flex-col gap-2 items-end">
    <CustomLabel bold>Operation Company</CustomLabel>
    <CustomSelector
      options={options}
      onChange={handleOperationCompanyIdChange}
      value={OperationCompanyId}
      placeholder="Select Operation CompanyId"
    />
  </div>

  );
}

export default OperationCompanyId;
