import { call, put, takeLatest } from "redux-saga/effects";
import { Toast } from "~/utils/libraries";
// import { setInquiryIndividual } from "../../../companies.slice";
import fetchDataFromApi from "~/utils/libraries/axios/axiosServer";

export function* fetchInquiryIndividual(action: any): Generator<any, void, any> {
  try {
    const { params, method, body } = action.payload;
    const endpoint = `/operationCompany/inquiry-individual?operationCompanyId=id`;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    console.log("response", response);
    // yield put(setInquiryIndividual(response));
  } catch (error: any) {
    Toast.fire({
      title: error.message,
      icon: "error", 
    })
  }
}
