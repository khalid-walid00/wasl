import { call, put, takeLatest } from "redux-saga/effects";
import { Toast } from "~/utils/libraries";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import { setInquiryCompany } from "../../../companies.slice";

function* fetchDataSaga(action: any): Generator<any, void, any> {
  try {
    const { params, method, body } = action.payload;
    const endpoint = `/operationCompany/inquiry-individual?operationCompanyId=id`;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    console.log("response", response);
    yield put(setInquiryCompany(response));
  } catch (error: any) {
    Toast.fire({
      title: error.message,
      icon: "error", 
    })
  }
}


export const fetchInquiryIndividual = function* Saga() {
  yield takeLatest("CUCompaniesSlice/fetchInquiryIndividual", fetchDataSaga);
}

