"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";

function UplevelOperationCompanyId() {
    const {
       
        company :{UplevelOperationCompanyId}, items :{Data}
    } = useSelector((state: any) => state.companiesSlice);

    const dispatch = useDispatch();
    const UplevelOperationCompanyIdChange = (e: any) => {
        dispatch(setCUData({ UplevelOperationCompanyId: e}));
    };
  const options = Data?.map((item: any) => ({
    value: item.Id,
    label: item.Name
  }))
    return (
        <div className="flex flex-col gap-2">
        <CustomLabel bold>Up level Operation CompanyId</CustomLabel>
        {/* <CustomInput value={UplevelOperationCompanyId} onChange={UplevelOperationCompanyIdChange} placeholder='Up level Operation CompanyId' /> */}
        <CustomSelector
            value={UplevelOperationCompanyId}
            options={options}
            onChange={UplevelOperationCompanyIdChange}
            placeholder={"Select Type"}
            />
    </div>
    );
}

export default UplevelOperationCompanyId;
