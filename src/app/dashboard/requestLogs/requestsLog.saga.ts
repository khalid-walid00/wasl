import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { fetchDataFailed,setData } from "../requestsLog/requestsLog.slice";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    // console.log("response", response);
    // yield put(setData(response));
  } catch (error: any) {
    yield put(fetchDataFailed(error.message));
  }
}


export const vehiclesSaga = function* Saga() {
  yield takeLatest("requestsLogSlice/fetchDataRequest", fetchDataSaga);
}
