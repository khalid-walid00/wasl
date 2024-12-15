import { takeLatest } from 'redux-saga/effects';
import { call, put } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { setActivity } from './appSlice';

export function* fetchActivity(): Generator<any, void, any> {
  try {
    const endpoint = `/activity/all`;
    const response = yield call(fetchDataFromApi, endpoint, null,"GET", null);
    const Option = response.map((item: any) => ({ value: item.Id, label: item.Name }));
    yield put(setActivity(Option));
  } catch (error: any) {
     Toast.fire({
       title: error.message,
       icon: "error", 
     })
  }
}


export const appSaga = function* Saga() {
  yield takeLatest('config/fetchActivity', fetchActivity);

}