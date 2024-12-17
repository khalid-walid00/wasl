import { call, put, select, takeLatest } from "redux-saga/effects";
import { setData, fetchDataFailed, setFilter, fetchDataRequestSuccess } from "./vehicle.slice"
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { endpoint, params, method, body } = action.payload;

    const { items } = yield select((state) => state.vehiclesSlice);
    if (items?.Data?.length > 0) {

    yield put(fetchDataRequestSuccess());
    yield put(setFilter("Active"));
    return;
    }

    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
   console.log("response", response);
    yield put(setData(response));
    yield put(setFilter("Active"));
  } catch (error: any) {
    yield put(fetchDataFailed(error.message));
  }
}


export const vehiclesSaga = function* Saga() {
  yield takeLatest("vehiclesSlice/fetchDataRequest", fetchDataSaga);
}
