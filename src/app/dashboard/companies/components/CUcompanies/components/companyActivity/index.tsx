"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { setCUData } from "~/app/dashboard/companies/companies.slice";

type Option = {
    label: string;
    value: string;
};

function CompanyActivity() {
 const {company :{Activity},Activity:optionsActivity} = useSelector((state: any) => state.companiesSlice);

    const dispatch = useDispatch();
    const ActivityChange = (e: any) => {
        dispatch(setCUData({ Activity: e }));
    };

    return (
        <div className="flex flex-col gap-2">
        <CustomLabel bold>Activity</CustomLabel>
        <div className=" h-[40px]">

        <CustomSelector
            value={Activity}
            options={optionsActivity}
            onChange={ActivityChange}
            placeholder={"Select Type"}
            isLoading={false}
            />
            </div>
    </div>
    );
}

export default CompanyActivity;
