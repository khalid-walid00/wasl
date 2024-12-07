// import { call, put, select } from "redux-saga/effects";
// import { fetchData } from "~/service/fetchData";
// import { fetchDataFailed, setData } from "../CUCompanies.slice";
// import { fetchDataFromApi } from "~/utils/libraries/axios/axiosClient";

// export function* initialDataSaga(): Generator<any, void, any> {
//   const {companyId} = yield select((state: any) => state.CUCompaniesSlice);
//   const endpoint = `operationCompany/register`;
//   const method = "Get"; 
//   try {
//     const data = yield call(fetchDataFromApi,endpoint, null, method, companyId);


//     yield put(setData({ }));
   
//   } catch (error: any) {
//     yield put(fetchDataFailed(error.message));
//   }
//   // yield put(setStatus({ loading: false }));
// }
