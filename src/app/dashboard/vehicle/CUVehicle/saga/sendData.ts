import { call, put, select } from "redux-saga/effects";
import { validateVehicleData } from "../CUVehiclevalidation";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData, clearVehicle, replaceItem } from "../../vehicle.slice";
import { HttpMethod } from "~/types";


function* performMutation(variables: any, endpoint: string, method: HttpMethod = "POST"): Generator<any, any, any> {
  return yield call(() => fetchDataFromApi(endpoint, null, method, variables));
}

export function* sendDataSaga(): Generator<any, void, any> {
  const { vehicle, vehicleId } = yield select((state: any) => state.vehiclesSlice);

  const endpoint = vehicleId ? `/vehicles/update` : `/vehicles/register`;
  const method: HttpMethod = vehicleId ? "PUT" : "POST"; 

  try {
    const validationResult = yield call(validateVehicleData, vehicle);
    if (!validationResult.valid) {
      const errorMessages = validationResult.errors?.map((msg: string) => `<p>${msg}</p>`)?.join("");
      Toast.fire({
        title: errorMessages,
        icon: "error",
      });
      return;
    }

    const response = yield call(performMutation, vehicle, endpoint, method);

    if (vehicleId) {
      yield put(replaceItem(response)); 
      yield put(clearVehicle());
    } else {
      yield put(addItem(response)); 
    }

    Toast.fire({
      title: "Vehicle saved successfully",
      icon: "success",
    });

    yield put(clearOneData());
  } catch (error: any) {
    console.error("Error saving vehicle:", error);

    Toast.fire({
      title: error.message || "An error occurred while saving the vehicle",
      icon: "error",
    });
  } finally {
    console.log("Vehicle save operation completed.");
  }
}
