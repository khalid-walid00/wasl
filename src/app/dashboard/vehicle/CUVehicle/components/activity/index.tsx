"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { useEffect } from "react";
import { fetchActivity } from "~/app/appSlice";
import { setCUData } from "../../../vehicle.slice";


function DriverActivity() {
  const {vehicle:{Activity}} = useSelector((state: any) => state.vehiclesSlice);
 const {Activity:optionsActivity, ActivityLoading} = useSelector((state: any) => state.config);
      
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

export default DriverActivity;
