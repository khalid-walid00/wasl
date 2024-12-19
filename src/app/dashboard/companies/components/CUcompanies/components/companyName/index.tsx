"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function NameInput() {
  const {
    company: { Name },companyType
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  
  const handleTitleChange = (e: any) => {
    dispatch(setCUData({ Name: e.target.value }));
  };

  const labelText = companyType=="Corporate" ? "Company Name" : "Owner Name";
  const placeholderText =companyType== "Corporate" ? "Enter Company Name" : "Enter Owner Name";

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>{labelText}</CustomLabel>
      <CustomInput 
        value={Name} 
        onChange={handleTitleChange} 
        placeholder={placeholderText} 
      />
    </div>
  );
}

export default NameInput;
