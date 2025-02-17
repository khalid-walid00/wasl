import { createSlice } from "@reduxjs/toolkit";
import { CompanyData } from "./companies.slice.type";

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
   Data: [],
  
  Message:"",
  StatusCode:false
}

const initialState = {
  items: items ,
  itemsSearch: [] as any ,
  loading: false,
  error: false,
  errors: [] as any,
  company,
  companyId:"",
  filter:'' ,
 companyType : "",
  searchItems,
  inquiry: {},
  inquiryLoading: false,
  inquiryModel: false,
  modalRow: false,
};



export const companiesSlice = createSlice({
  name: "companiesSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.items = items;
    },
    fetchDataRequest: (state, action) => {
      state.loading = true;
    },
    fetchDataFailed: (state) => {
      state.error = true;
    },

    setData: (state, action) => {
      console.log("setData",action.payload);
      state.items = action.payload;
      state.loading = false;
    },
    fetchDataRequestSuccess(state) {
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
    setValidationErrors: (state, action) => {
      state.errors = action.payload;
    },
    emptyValidationErrors: (state) => {
      state.errors =[];
    },
    clearFeiledErrors: (state, action) => {
      state.errors = state.errors?.filter(
        (error:any) => error.field !== action.payload
      );
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
    clearOneData: (state) => {
      state.company = company;
    },
    setFilter:(state, action) => {
      const  value  = action.payload;
      console.log("nnnnn", value);
      state.filter = value; 
      let filterValue = { WaslId: true, IsDeletedFromWasl: false };
    
      if (value === "Inactive") {
        filterValue = { WaslId: false, IsDeletedFromWasl: false };
      }
    
      if (value === "Delete") {
        filterValue = { WaslId: false, IsDeletedFromWasl: true };
      }
    
      if (value === "Active") {
        filterValue = { WaslId: true, IsDeletedFromWasl: false };
      }
      console.log("filterValue", filterValue);
      console.log("Datafilter", state?.items?.Data);
       const newData = state?.items?.Data?.filter((item) => 
        Boolean(item?.WaslId) === filterValue.WaslId && 
        Boolean(item?.IsDeletedFromWasl) === filterValue.IsDeletedFromWasl
      );
      console.log("newData", newData);
      if(newData === undefined) state.itemsSearch = [];
      else  state.itemsSearch = newData;
        
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    search: (state) => {
      const { type, value } = state.searchItems;
      if (value !== "") {
        const matchingItems = state.items?.Data?.filter((item: any) => 
          item[type] && item[type].toString().includes(value)
        );
        state.itemsSearch = matchingItems; 
      } else {
        state.itemsSearch = []; 
      }
    },
    addItem: (state, action) => {
      console.log("addItem", action.payload);
      const existingIndex = state.items.Data.findIndex(
        (item: any) => item.Id === action.payload?.Data?.Id
    );

    if (existingIndex !== -1) {
        state.items.Data[existingIndex] = action.payload?.Data;
    } else {
        state.items.Data.unshift(action.payload?.Data);
    }  
    console.log("state.items.Data", state.items.Data);
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
      const idsToRemove = action.payload;
      const index = state.items.Data.findIndex((item) => item.Id === idsToRemove);
      if (index !== -1) {
        state.items.Data[index] = { ...state.items.Data[index], IsDeletedFromWasl: true,WaslId: "" };
      }
    },
    setSelectedRowId: (state, action) => {
      if(action.payload) state.companyId = action.payload;
      else state.companyId = "";
      state.modalRow =  !state.modalRow
    },
    setInquiryModel: (state, action) => {
      if(action.payload) state.company = action.payload;
      // else state.company = company;
      state.inquiryModel =  !state.inquiryModel
    },
    changeRegisterType: (state, action) => {
      state.companyType =  action.payload
    },
    completeFormData(state, action) {
      const { payload } = action;
      const matchingItems = state.items.Data?.find((item) => item.IdentityNumber === payload);
      console.log("matchingItems", matchingItems);
      if (matchingItems !== undefined) {
         state.company = matchingItems;
        }
    }
    
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search ,fetchOneData,setSelectedRowId,setFilter,fetchDataRequestSuccess,setValidationErrors,emptyValidationErrors,
  clearOneData,setCUData,setInquiry,fetchInquiry,sendData,setInquiryModel,changeRegisterType,completeFormData,clearFeiledErrors
  , fetchDataRequest, fetchDataFailed, setData ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
