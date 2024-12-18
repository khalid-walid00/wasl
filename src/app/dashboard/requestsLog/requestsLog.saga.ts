import { call, put, select, takeLatest } from "redux-saga/effects";
import { setData, fetchDataFailed, fetchDataRequestSuccess } from "./requestsLog.slice"
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;
    const { items } = yield select((state) => state.requestsLogSlice);
    if (items?.Data?.length > 0) {
      yield put(fetchDataRequestSuccess());
      return;
    }
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    yield put(setData(response));
  } catch (error: any) {
    yield put(fetchDataFailed(error.message));
  }
}


export const requestsLogSaga = function* Saga() {
  yield takeLatest("requestsLogSlice/fetchDataRequest", fetchDataSaga);
}
