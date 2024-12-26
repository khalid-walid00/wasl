"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { useEffect } from "react";
import { fetchCompany } from "~/app/appSlice";

function UplevelOperationCompanyId() {
  const {

    company: { UplevelOperationCompanyId }
  } = useSelector((state: any) => state.companiesSlice);
  const { company: optionsCompany, companyLoading } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();
  const UplevelOperationCompanyIdChange = (e: any) => {
    dispatch(setCUData({ UplevelOperationCompanyId: e }));
  };
  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-2">
      <CustomLabel bold>Up level Operation CompanyId</CustomLabel>
      <CustomSelector
        value={UplevelOperationCompanyId}
        options={optionsCompany}
        isLoading={companyLoading}
        onChange={UplevelOperationCompanyIdChange}
        placeholder={"Select Type"}
      />
    </div>
  );
}

export default UplevelOperationCompanyId;
