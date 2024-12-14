import { call, put } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { setActivity } from "../../../companies.slice";
import { Toast } from "~/utils/libraries";

export function* fetchActivity(action: any): Generator<any, void, any> {
  try {
    const { method } = action.payload;
    const endpoint = `/activity/all`;
    const response = yield call(fetchDataFromApi, endpoint, null, method, null);
    yield put(setActivity(response));
  } catch (error: any) {
     Toast.fire({
       title: error.message,
       icon: "error", 
     })
  }
}

