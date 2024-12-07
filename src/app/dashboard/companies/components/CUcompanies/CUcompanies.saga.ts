import { takeLatest } from 'redux-saga/effects';
import * as saga from './saga/index'

export const CUCompaniesSaga = function* Saga() {
  yield takeLatest('companiesSlice/fetchCategory', saga.fetchInquiryIndividual);
  yield takeLatest('companiesSlice/sendData', saga.sendDataSaga);

}