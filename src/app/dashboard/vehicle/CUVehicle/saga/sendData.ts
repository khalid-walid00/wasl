import { call, put, select } from "redux-saga/effects";
import { validateVehicleData } from "../CUVehiclevalidation";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData, clearVehicle, replaceItem } from "../../vehicle.slice";

function* performMutation(variables: any, endpoint: string): Generator<any, any, any> {
  const method = "POST";
  return yield call(fetchDataFromApi, endpoint, null, method, variables);
}

export function* sendDataSaga(): Generator<any, void, any> {
  const { vehicle, vehicleId } = yield select((state: any) => state.vehiclesSlice);
  let endpoint = `/vehicles/register`;
  if (vehicleId) endpoint = `vehicles/update`

  try {
    const result = yield call(validateVehicleData, vehicle);
    if (!result.valid) {
      Toast.fire({
        title: result.errors?.map((msg: string) => `<p>${msg}</p>`)?.join(""),
        icon: "error",
      });
    
      return;
    }
    const response = yield performMutation(vehicle, endpoint);


    if (vehicleId) {
      yield put(replaceItem(response));
      yield put(clearVehicle());
    } else yield put(addItem(response));

    Toast.fire({
      title: "Vehicle saved successfully",
      icon: "success",
    });
    yield put(clearOneData());
  } catch (error: any) {
    console.log("error", error);
    Toast.fire({
      title: error.message,
      icon: "error",
    });
  } finally {
    console.log("finally");
  }
}
