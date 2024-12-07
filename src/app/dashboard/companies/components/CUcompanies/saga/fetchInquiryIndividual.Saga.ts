import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import { setInquiryIndividual } from "../../../companies.slice";
import { Toast } from "~/utils/libraries";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { params, method, body } = action.payload;
    const endpoint = `operationCompany/inquiry-individual?operationCompanyId=id`;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    console.log("response", response);
    yield put(setInquiryIndividual(response));
  } catch (error: any) {
     Toast.fire({
       title: error.message,
       icon: "error", 
     })
  }
}


export const fetchInquiryCompany = function* Saga() {
  yield takeLatest("CUCompaniesSlice/fetchInquiryCompany", fetchDataSaga);
}

