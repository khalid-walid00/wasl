import { takeLatest } from 'redux-saga/effects';
import * as saga from './saga/index'

export const CUCompaniesSaga = function* Saga() {
  yield takeLatest('companiesSlice/fetchInquiry', saga.fetchInquiry);
  yield takeLatest('companiesSlice/fetchActivity', saga.fetchActivity);
  yield takeLatest('companiesSlice/sendData', saga.sendDataSaga);

}