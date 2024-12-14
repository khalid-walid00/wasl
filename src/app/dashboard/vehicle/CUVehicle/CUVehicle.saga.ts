import { takeLatest } from 'redux-saga/effects';
import * as saga from './saga/index'

export const CUVehiclesSaga = function* Saga() {
  yield takeLatest('vehiclesSlice/fetchInquiry', saga.fetchInquiryVehicle);
  yield takeLatest('vehiclesSlice/sendData', saga.sendDataSaga);

}