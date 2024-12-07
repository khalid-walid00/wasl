import { all } from "redux-saga/effects";
import {companiesSaga} from "~/app/dashboard/companies/companies.saga";
import { CUCompaniesSaga } from "~/app/dashboard/companies/components/CUcompanies/CUcompanies.saga";
import { driversSaga } from "~/app/dashboard/drivers/drivers.saga";
import { vehiclesSaga } from "~/app/dashboard/vehicle/vehicle.saga";


export default function* rootSaga() {
  yield all([
    companiesSaga(),
    vehiclesSaga(),
    driversSaga(),
    CUCompaniesSaga()
  ]);
}
