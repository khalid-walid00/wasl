import { combineReducers } from "@reduxjs/toolkit";
import { configuerStore } from "~/app/appSlice";
import analysisReducer from "~/app/dashboard/analysis/analysisSlice";
import createVehicleSlice from "~/app/dashboard/vehicle/create/createVehicle.slice";

const reducer = combineReducers({
    config: configuerStore,
    createVehicleSlice
})

export default reducer;
