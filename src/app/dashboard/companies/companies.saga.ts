import { call, put, select, takeLatest } from "redux-saga/effects";
import { setData, fetchDataFailed, setFilter, fetchDataRequestSuccess } from "./companies.slice"
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;

    const { items } = yield select((state) => state.companiesSlice);
    if (items?.Data?.length > 0) {

    yield put(fetchDataRequestSuccess());
    yield put(setFilter("Active"));
    return;
    }

    const response = yield call(fetchDataFromApi, endpoint, params, method, body);

    yield put(setData(response));
    yield put(setFilter("Active"));
  } catch (error: any) {
    console.log("error", error);
    yield put(fetchDataFailed());
  }
}

export const companiesSaga = function* Saga() {
  yield takeLatest("companiesSlice/fetchDataRequest", fetchDataSaga);
}
