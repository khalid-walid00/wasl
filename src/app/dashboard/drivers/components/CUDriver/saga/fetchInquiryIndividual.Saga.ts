import { call, put } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
// import { setInquiryIndividual } from "../../../companies.slice";
import { Toast } from "~/utils/libraries";

export function* fetchInquiryCompany(action: any): Generator<any, void, any> {
  try {
    const { params, method, body } = action.payload;
    const endpoint = `operationCompany/inquiry-individual?operationCompanyId=id`;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    // yield put(setInquiryIndividual(response));
  } catch (error: any) {
     Toast.fire({
       title: error.message,
       icon: "error", 
     })
  }
}

