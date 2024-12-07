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
    const {
        company :{Activity}
    } = useSelector((state: any) => state.companiesSlice);

    const dispatch = useDispatch();
    const ActivityChange = (e: any) => {
        dispatch(setCUData({ Activity: e }));
    };
   const options: Option[] = [
       { label: "DEFAULT1", value: "DEFAULT1" },
       { label: "DEFAULT2", value: "DEFAULT2" },
       { label: "DEFAULT3", value: "DEFAULT3" },
   ]
    return (
        <div className="flex flex-col gap-2">
        <CustomLabel bold>Activity</CustomLabel>
        <div className=" h-[40px]">

        <CustomSelector
            value={Activity}
            options={options}
            onChange={ActivityChange}
            placeholder={"Select Type"}
            isLoading={false}
            />
            </div>
    </div>
    );
}

export default CompanyActivity;
