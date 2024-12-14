"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function IdentityNumber() {
  const {
    company
  } = useSelector((state: any) => state.companiesSlice);

  const dispatch = useDispatch();
  const handleIdentityNumberhange = (e: any) => {
    dispatch(setCUData({ IdentityNumber: e.target.value }));
  if(company?.IdentityNumber?.startsWith("70")){
    dispatch(setCUData({ DateOfBirthHijri: "" }));
  }else{
    dispatch(setCUData({ 
      CommercialRecordNumber: "",
      CommercialRecordIssueDateHijri:"",
      ManagerName:"",
      ManagerPhoneNumber:"",
      ManagerMobileNumber:"",
      DateOfBirthGregorian:"",
    }));
  }
  };

  return (
    <div className="flex flex-col gap-2">
    <CustomLabel bold>IdentityNumber</CustomLabel>
    <CustomInput value={company.IdentityNumber} onChange={handleIdentityNumberhange} placeholder='identity Number' />
</div>
  );
}

export default IdentityNumber;
