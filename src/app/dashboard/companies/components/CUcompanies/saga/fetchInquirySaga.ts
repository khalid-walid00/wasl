import { call, put, takeLatest } from "redux-saga/effects";
import { Toast } from "~/utils/libraries";
import { setInquiry } from "../../../companies.slice";
import fetchDataFromApi from "~/utils/libraries/axios/axiosServer";

export function* fetchInquiry(action: any): Generator<any, void, any> {
  try {
    const { method,endpoint } = action.payload;
    console.log(endpoint, method);
    const response = yield call(fetchDataFromApi, endpoint, null, method, null);
    console.log("responsefetchInquiry", response);
    yield put(setInquiry(response.Data));
  } catch (error: any) {
    Toast.fire({
      title: error.message,
      icon: "error", 
    })
  }
}
