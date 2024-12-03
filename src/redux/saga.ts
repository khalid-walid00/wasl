import { all } from "redux-saga/effects";
import {companiesSaga} from "~/app/dashboard/companies/companies.saga";


export default function* rootSaga() {
  yield all([
    companiesSaga(),
  ]);
}
