import { call, put, select } from "redux-saga/effects";
import { fetchDataFromApi } from "~/utils/libraries/axios/axiosServer";
import { Toast } from "~/utils/libraries";
import { addItem, clearOneData, replaceItem, setFilter } from "../../../companies.slice";
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

  //   Name
  //   IdentityNumber
  // CommercialRecordNumber
  // DateOfBirthHijri
  // ExtensionNumber
  // EmailAddress
  // ManagerName
  //   PhoneNumber

  // ManagerPhoneNumber
  // ManagerMobileNumber

  // Activity


    let dataToSend = company; 
    if (companyType == "Corporate") {
      dataToSend = { 
        Name: company.Name,
        EmailAddress: company.EmailAddress,
        PhoneNumber: company.PhoneNumber,
        DateOfBirthHijri: company.DateOfBirthHijri,
        IdentityNumber: company.IdentityNumber,
        CommercialRecordNumber: company.CommercialRecordNumber,
        CommercialRecordIssueDateHijri: company.CommercialRecordIssueDateHijri,
        Activity: company.Activity,
         ExtensionNumber: "1234",
        ManagerName: company.ManagerName,
        ManagerPhoneNumber: company.ManagerPhoneNumber,
        ManagerMobileNumber: company.ManagerMobileNumber,
        UplevelOperationCompanyId: company.UplevelOperationCompanyId
      }
    }else{
      dataToSend = {
        Name: company.Name,
        EmailAddress: company.EmailAddress,
         ExtensionNumber: "1234",
         PhoneNumber: company.PhoneNumber,
        DateOfBirthHijri: company.DateOfBirthHijri,
        IdentityNumber: company.IdentityNumber,
        Activity: company.Activity
      };
    }
    console.log("dataToSend", dataToSend);
    // const result = yield call(validateData, dataToSend);
    // console.log("resultvalidateData", result);
    // if (!result.valid) {
    //   result?.errors?.map((msg: any) => {
    //     Toast.fire({
    //       title: msg ,
    //       icon: "error",
    //     });
    //   });

    //   return;
    // }
    const response = yield performMutation(company, endpoint);
    console.log("response", response);

    if (companyId) {
      yield put(replaceItem(response));
      yield put(setRedirectTo("/dashboard/companies"));

    } else {
      yield put(addItem(response));
      
    }
    yield put(setFilter("Active"));

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
