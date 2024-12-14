import { createSlice } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";
import { CompanyData } from "./companies.slice.type";

let url; if (typeof window !== 'undefined') { url = new URL(window.location.href); } else { url = new URL('http://localhost:3055') }
const searchItems = {
  type:"",
  value:"",
}

const company : CompanyData = {
  Id:"",
  Name: "",
  WaslId: "",
  IsDeletedFromWasl: false,
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


interface itemsTypes {
  Data: CompanyData[],
  Message: string,
  StatusCode: boolean;
}
const items : itemsTypes = {
   Data: [
    {
      Id: "2",
      WaslId: "7012345678",
      IsDeletedFromWasl: true,
      CreatedDate: "2024-05-10",
      Name: "Tech Innovations Ltd.",
      EmailAddress: "contact@techinnovations.com",
      PhoneNumber: "0987654321",
      Activity: "Inactive",
      CreatedBy: "Admin",
      IdentityNumber: "7012345678",
      DateOfBirthHijri: "1445-02-15",
      CommercialRecordNumber: "5678901234",
      CommercialRecordIssueDateHijri: "1440-07-09",
      DateOfBirthGregorian: "1985-06-22",
      ExtensionNumber: "500",
      ManagerName: "Fahad Al-Farsi",
      ManagerPhoneNumber: "0598765432",
      ManagerMobileNumber: "0598765432",
      UplevelOperationCompanyId: "1234abcd5678efgh91011ijk",
    },
    {
      Id: "3",
      WaslId: "7012345678",
      IsDeletedFromWasl: false,
      CreatedDate: "2023-11-25",
      Name: "Global Solutions Group",
      EmailAddress: "info@globalsolutions.com",
      PhoneNumber: "0212345678",
      Activity: "Active",
      CreatedBy: "User",
      IdentityNumber: "7012345678",
      DateOfBirthHijri: "1443-09-10",
      CommercialRecordNumber: "1234567890",
      CommercialRecordIssueDateHijri: "1441-03-01",
      DateOfBirthGregorian: "1992-03-13",
      ExtensionNumber: null,
      ManagerName: "Sara Al-Mutairi",
      ManagerPhoneNumber: "0587123456",
      ManagerMobileNumber: "0587123456",
      UplevelOperationCompanyId: "abcd1234efgh5678ijkl9101",
    },
  ],
  
  Message:"",
  StatusCode:false
}

const initialState = {
  items: items ,
  itemsSearch: []as any ,
  loading: false,
  error: false,
  company,
  companyId:"",
  searchItems,
  inquiry: {},
  inquiryLoading: false,
  inquiryModel: false,
  ActivityLoading: false,
  Activity: [{ value: "Active", label: "Active" }, { value: "Inactive", label: "Inactive" }],
  modalRow: false,
  page:  Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number( url.searchParams.get("limit") || pagination.defaultLimit)  ,
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
      state.companyId = action.payload;
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

    fetchInquiry: (state, action) => {
      state.inquiryLoading = true;
    },
    
    setInquiry: (state, action) => {
      state.inquiryLoading = true;
      state.inquiry = action.payload;
    },
    fetchActivity: (state) => {
      state.ActivityLoading = true;
    },
    setActivity: (state, action) => {
      state.ActivityLoading = false;
      state.Activity = action.payload;
    },
    clearOneData: (state) => {
      state.company = company;
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      console.log("type, value", type, value);
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    search: (state) => {
      const { type, value } = state.searchItems;    
      const company = state.items.Data.find((item: any) => {
         return  item[type]?.toString().includes(value); 
      });    
      if (company) {
        state.itemsSearch = [company];  
      } else {
        state.itemsSearch = []; 
      }
    },
    addItem: (state, action) => {
        state.items.Data.unshift(action.payload)
    },

    replaceItem: ( state , action ) => {
      const { Data } = state.items;
      const { payload } = action;
      console.log("payload", payload);
      const index = Data.findIndex((item:any ) => item.Id === payload.Id);
      console.log("index", index);
      if (index !== -1) {
        state.items.Data[index] = {
          ...state.items.Data[index],
          ...payload 
        };
      }
    }, 
    deleteItem: (state, action) => {
     const idsToRemove =action.payload
        state.items.Data = state.items.Data?.filter(item => item.Id !== idsToRemove);
    },
    setLimit: (state, action) => {     
      state.page = 1; 
      state.limit = action.payload;
      state.loading = true;
    },
    setSelectedRowId: (state, action) => {
      if(action.payload) state.companyId = action.payload;
      state.modalRow =  !state.modalRow
    },
    setInquiryModel: (state, action) => {
      if(action.payload) state.company = action.payload;
      state.inquiryModel =  !state.inquiryModel
    },
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search ,fetchOneData,fetchActivity,setActivity,setSelectedRowId,
  clearOneData,setCUData,setInquiry,fetchInquiry,sendData,setLimit,setInquiryModel
  , fetchDataRequest, fetchDataFailed, setData ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
