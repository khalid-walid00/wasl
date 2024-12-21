import { call, put, select } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData, replaceItem } from "../../../companies.slice";
import { setRedirectTo } from "~/app/appSlice";
import { validateCompanyData, validateOwnerInfoData } from "../validation";

function* performMutation(variables: any, endpoint: string): Generator<any, any, any> {
  const method = "POST";
  return yield call(fetchDataFromApi, endpoint, null, method, variables);
}

export function* sendDataSaga(): Generator<any, void, any> {
  const { company, companyId, companyType } = yield select((state: any) => state.companiesSlice);
  let endpoint = `/operationCompany/register`;
  if (companyId) endpoint = `/operationCompany/update`
  console.log("companyIdsendDataSaga", companyId);
  let validateData
  if (companyType === "Corporate") validateData = validateCompanyData
  else validateData = validateOwnerInfoData
  try {
    const result = yield call(validateData, company);
   console.log("result", result);
    if (!result.valid) {
      Toast.fire({
        title: result.errors.map((msg: any) => `<p>${msg?.message}</p>`).join(""),
        icon: "error",
      });

      return;
    }
    const response = yield performMutation(company, endpoint);
    console.log("response", response);

    if (companyId) {
      yield put(replaceItem(company));
      yield put(setRedirectTo("/dashboard/companies"));

    } else yield put(addItem(company));

    Toast.fire({
      title: "Company saved successfully",
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
