import { combineReducers } from "@reduxjs/toolkit";
import { configuerStore } from "~/app/appSlice";
import companiesSlice from "~/app/dashboard/companies/companies.slice";
import forgetPassword  from "~/app/(auth)/forgetPassword/forgetPassword.slice";
import  vehiclesSlice  from "~/app/dashboard/vehicle/vehicle.slice";
import  driversSlice  from "~/app/dashboard/drivers/drivers.slice";
import requestsLogSlice from "~/app/dashboard/requestsLog/requestsLog.slice";
import analysisSlice from "~/app/dashboard/analysis/analysisSlice";

const reducer = combineReducers({
    config: configuerStore,
    companiesSlice,
    forgetPassword,
    vehiclesSlice,
    driversSlice,
    requestsLogSlice,
    analysisSlice
})

export default reducer;
