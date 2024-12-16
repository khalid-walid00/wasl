import { call, put, takeLatest } from "redux-saga/effects";
import { setData, fetchDataFailed } from "./companies.slice"
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    console.log("response", response);
    yield put(setData(response));
  } catch (error: any) {
    yield put(fetchDataFailed(error.message));
  }
}


export const companiesSaga = function* Saga() {
  yield takeLatest("companiesSlice/fetchDataRequest", fetchDataSaga);
}
