import { all } from "redux-saga/effects";
import { appSaga } from "~/app/appSaga";
import {companiesSaga} from "~/app/dashboard/companies/companies.saga";
import { CUCompaniesSaga } from "~/app/dashboard/companies/components/CUcompanies/CUcompanies.saga";
import { driversSaga } from "~/app/dashboard/drivers/drivers.saga";
import { requestsLogSaga } from "~/app/dashboard/requestsLog/requestsLog.saga";
import { CUVehiclesSaga } from "~/app/dashboard/vehicle/CUVehicle/CUVehicle.saga";
import { vehiclesSaga } from "~/app/dashboard/vehicle/vehicle.saga";


export default function* rootSaga() {
  yield all([
    appSaga(),
    companiesSaga(),
    vehiclesSaga(),
    driversSaga(),
    CUCompaniesSaga(),
    CUVehiclesSaga(),
    requestsLogSaga()
  ]);
}
