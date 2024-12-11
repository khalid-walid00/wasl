import { createSlice } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";
import { CompanyData } from "./companies.slice.type";
import { clear } from "console";

let url; if (typeof window !== 'undefined') { url = new URL(window.location.href); } else { url = new URL('http://localhost:3055') }
const searchitems = {
  Name: null,
  ManagerMobileNumber: null,
  status: null,
  date: null,
  sort: null
}

const company : CompanyData = {
  Id:"",
  Name: "",
  IdentityNumber: "",
  CommercialRecordNumber: "",
  CommercialRecordIssueDateHijri: "",
  DateOfBirthHijri: "",
  DateOfBirthGregorian: "",
  PhoneNumber: "",
  ExtensionNumber: "",
  EmailAddress: "",
  ManagerName: "",
  ManagerPhoneNumber: "",
  ManagerMobileNumber: "",
  Activity: "",
  UplevelOperationCompanyId: "",
};
interface PaginationType {
  totalCount: number,
  totalPages: number,
}

interface itemsTypes {
  Data: CompanyData[],
  Message: string,
  StatusCode: boolean;
}
const items : itemsTypes = {
  Data: [],
  Message:"",
  StatusCode:false
}

const initialState = {
  items: items,
  loading: false,
  error: false,
  company,
  searchitems,
  inquiryIndividual: {},
  inquiryIndividualLoading: false,
  inquiryCompanyLoading: false,
  page:  Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number( url.searchParams.get("limit") || pagination.defaultLimit)  ,
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
};



export const companiesSlice = createSlice({
  name: "companiesSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.items = items;
      state.page =  pagination.defaultPage;
      state.limit = pagination.defaultLimit;
    },
    fetchDataRequest: (state, action) => {
      state.loading = true;
    },
    fetchDataFailed: (state) => {
      state.error = true;
    },
    setData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchOneData: (state, action) => {
      const company = state.items.Data.find((item) => item.Id === action.payload);
       if (company) {
        state.company = company;
      }
    },
    setCUData: (state, action) => {
      state.company =  {...state.company, ...action.payload};
    },
    sendData: (state) => {
      state.loading = true;
    },
    fetchInquiryIndividual: (state) => {
      state.inquiryIndividualLoading = true;
    },
    
    setInquiryIndividual: (state) => {
      state.inquiryIndividualLoading = true;
    },
    fetchInquiryCompany: (state) => {
      state.inquiryCompanyLoading = true;
    },
    setInquiryCompany: (state) => {
      state.inquiryIndividualLoading = true;
    },
    clearOneData: (state) => {
      state.company = company;
    },
    nextPage: (state) => {
      state.page += 1;
      state.loading = true;
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
        state.loading = true;
      }
    },
    setLimit: (state, action) => {     
      state.page = 1; 
      state.limit = action.payload;
      state.loading = true;
    }, 
    setSearch: (state,action) => {
      state.searchitems = {...state.searchitems, ...action.payload};
    },
    search: (state) => {
      state.page = 1;
      state.loading = true;
    },
    addItem: (state, action) => {
    
        state.items.Data.unshift(action.payload)
      
    },
    replaceItem: ( state , action ) => {
      const { Data } = state.items;
      const { payload } = action;
    
      const index = Data.findIndex((item:any ) => item._id === payload._id);
    
      if (index !== -1) {
        state.items.Data[index] = {
          ...state.items.Data[index],
          ...payload.data 
        };
      }
    }, 
    deleteItem: (state, action) => {
     const idsToRemove =action.payload
        state.items.Data = state.items.Data?.filter(item => item.Id !== idsToRemove);
    },
    setPage:(state,action)=>{
      state.page = +action.payload; 
      state.loading = true;
    },
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search , setPage,fetchOneData,
  clearOneData,setCUData,setInquiryIndividual,sendData,setInquiryCompany
  , fetchDataRequest, fetchDataFailed, setData , nextPage , prevPage, setLimit ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
