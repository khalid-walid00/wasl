import { combineReducers } from "@reduxjs/toolkit";
import { configuerStore } from "~/app/appSlice";
import analysisReducer from "~/app/dashboard/analysis/analysisSlice";
import companiesSlice from "~/app/dashboard/companies/companies.slice";
import forgetPassword  from "~/app/(auth)/forgetPassword/forgetPassword.slice";
import  vehiclesSlice  from "~/app/dashboard/vehicle/vehicle.slice";
import  driversSlice  from "~/app/dashboard/drivers/drivers.slice";

const reducer = combineReducers({
    config: configuerStore,
    companiesSlice,
    forgetPassword,
    vehiclesSlice,
    driversSlice,
})

export default reducer;
