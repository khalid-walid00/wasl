import { call, put } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { setInquiry } from "../../vehicle.slice";

export function* fetchInquiryVehicle(action: any): Generator<any, void, any> {
  try {
    const { params, method, body , vehicleId} = action.payload;
    const endpoint = `vehicles/vehicle-inquiry?VehicleId=675ad4baac12422051144236`;
    console.log(endpoint, params, method, body);
    const response = yield call(fetchDataFromApi, endpoint, params, method, body);
    yield put(setInquiry(response));
  } catch (error: any) {
     Toast.fire({
       title: error.message,
       icon: "error", 
     })
  }
}

