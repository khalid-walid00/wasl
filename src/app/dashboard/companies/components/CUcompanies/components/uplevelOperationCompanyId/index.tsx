"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

function UplevelOperationCompanyId() {
    const {
        company :{UplevelOperationCompanyId}
    } = useSelector((state: any) => state.companiesSlice);

    const dispatch = useDispatch();
    const UplevelOperationCompanyIdChange = (e: any) => {
        dispatch(setCUData({ UplevelOperationCompanyId: e.target.value}));
    };

    return (
        <div className="flex flex-col gap-2">
        <CustomLabel bold>Up level Operation CompanyId</CustomLabel>
        <CustomInput value={UplevelOperationCompanyId} onChange={UplevelOperationCompanyIdChange} placeholder='Up level Operation CompanyId' />
    </div>
    );
}

export default UplevelOperationCompanyId;
