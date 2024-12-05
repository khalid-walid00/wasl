import { combineReducers } from "@reduxjs/toolkit";
import { configuerStore } from "~/app/appSlice";
import analysisReducer from "~/app/dashboard/analysis/analysisSlice";
import companiesSlice from "~/app/dashboard/companies/companies.slice";
import createVehicleSlice from "~/app/dashboard/vehicle/create/createVehicle.slice";
import forgetPassword  from "~/app/(auth)/forgetPassword/forgetPassword.slice";

const reducer = combineReducers({
    config: configuerStore,
    createVehicleSlice,
    companiesSlice,
    forgetPassword
})

export default reducer;
