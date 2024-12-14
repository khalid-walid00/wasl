"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";

function Activity() {
  const {vehicle:{Activity}} = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleActivityChange = (e: any) => {
    dispatch(setCUData({ Activity: e }));
  };
   const options =[{
    value: "Active", label: "Active"
  },{
    value: "Inactive", label: "Inactive"
  }]
  const tooltipOptions = [
    { id: "Active", tooltipContent: "وصف" },
    { id: "Inactive", tooltipContent: "وصف" },
  ];
  return (
    <div className="flex flex-col gap-2 items-end">
    <CustomLabel bold>Activity</CustomLabel>
    <CustomSelector
      options={options}
      onChange={handleActivityChange}
      value={Activity}
      tooltipOptions={tooltipOptions}
      placeholder="Select Operation CompanyId"
    />
  </div>

  );
}

export default Activity;
