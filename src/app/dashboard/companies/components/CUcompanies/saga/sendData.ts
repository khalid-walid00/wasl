import { call, put, select } from "redux-saga/effects";
import { validateCompanyData } from "../CUCompanies.validation";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData } from "../../../companies.slice";
import { redirect } from "next/navigation";

function* performMutation(variables: any): Generator<any, any, any> {
  const endpoint = `operationCompany/register`;
  const method = "POST"; 
  return yield call(fetchDataFromApi, endpoint, null, method, variables);
}

export function* sendDataSaga(): Generator<any, void, any> {
  const { company } = yield select((state: any) => state.companiesSlice);
  let variable = { ...company, Activity: company.Activity.value };

  try {
    const result = yield call(validateCompanyData, variable);
    console.log("result", result);
    console.log("variable", variable);
 
    if (!result.valid) {
      Toast.fire({
        title: result.errors.split(" | ").map((msg:any) => `<p>${msg}</p>`).join(""),
        icon: "error",
      });

      return;
    }
    // const response = yield call(performMutation, company);
    yield put(addItem(company));
    Toast.fire({
      title: "تمت العملية بنجاح",
      icon: "success",
    });
    yield put(clearOneData());
    
  } catch (error: any) {

    Toast.fire({
      title: error.message,
      icon: "error",
    });
  } finally {
    console.log("finally");
  }
}
