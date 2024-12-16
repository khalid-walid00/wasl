import { call, put, select } from "redux-saga/effects";
import { validateCompanyData } from "../CUCompanies.validation";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData,replaceItem } from "../../../companies.slice";
import { setRedirectTo } from "~/app/appSlice";

function* performMutation(variables: any, endpoint: string): Generator<any, any, any> {
  const method = "POST"; 
  return yield call(fetchDataFromApi, endpoint, null, method, variables);
}

export function* sendDataSaga(): Generator<any, void, any> {
  const { company ,companyId } = yield select((state: any) => state.companiesSlice);
let endpoint = `operationCompany`;
   if (companyId)  endpoint = `operationCompany`

  try {
    const result = yield call(validateCompanyData, company);

    if (!result.valid) {
      Toast.fire({
        title: result.errors.map((msg: string) => `<p>${msg}</p>`).join(""),
        icon: "error",
      });
    
      return;
    }
    const response = yield performMutation(company, endpoint);

   
   if (companyId){
     yield put(replaceItem(company));
     yield put(setRedirectTo("/dashboard/companies"));

      }else yield put(addItem(company));

    Toast.fire({
      title: "Company saved successfully",
      icon: "success",
    });
    // yield put(clearOneData());
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
