"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { setCUData } from "~/app/dashboard/companies/companies.slice";
import { useEffect } from "react";
import { fetchActivity } from "~/app/appSlice";


function CompanyActivity() {
 const {company :{Activity}} = useSelector((state: any) => state.companiesSlice);
 const {Activity:optionsActivity, ActivityLoading} = useSelector((state: any) => state.config);
        console.log("optionsActivity", optionsActivity);
    const dispatch = useDispatch();
    const ActivityChange = (e: any) => {
        dispatch(setCUData({ Activity: e }));
    };
   useEffect(() => {
       dispatch(fetchActivity()); 
   },[])

    return (
        <div className="flex flex-col gap-2">
        <CustomLabel bold>Activity</CustomLabel>
        <div className=" h-[40px]">

        <CustomSelector
            value={Activity}
            options={optionsActivity}
            onChange={ActivityChange}
            placeholder={"Select Type"}
            isLoading={ActivityLoading}
            />
            </div>
    </div>
    );
}

export default CompanyActivity;
