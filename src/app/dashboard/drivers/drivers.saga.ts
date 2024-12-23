import { call, put, takeLatest } from "redux-saga/effects";
import { setData, fetchDataFailed } from "./drivers.slice"
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    yield put(setData(response));
  } catch (error: any) {
    yield put(fetchDataFailed(error.message));
  }
}


export const driversSaga = function* Saga() {
  yield takeLatest("driversSlice/fetchDataRequest", fetchDataSaga);
}
