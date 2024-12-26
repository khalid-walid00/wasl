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
    faildSetData: (state, action) => {
      state.errors = action.payload;
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
      console.log("value", value);
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
       const newData = state?.items?.Data?.filter((item) =>  Boolean(item.WaslId) == filterValue.WaslId && Boolean(item.IsDeletedFromWasl) == filterValue.IsDeletedFromWasl )
      console.log("newData", newData);
          state.itemsSearch = newData;
        
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    search: (state) => {
      const { type, value } = state.searchItems;
      if (value !== "") {
        const matchingItems = state.items.Data?.filter((item: any) => 
          item[type] && item[type].toString().includes(value)
        );
        state.itemsSearch = matchingItems; 
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
     console.log("idsToRemove", idsToRemove);
        state.items.Data = state.items.Data?.filter(item => item.Id !== idsToRemove);
        console.log("state.items.Data", state.items.Data);
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
      if (matchingItems !== undefined) {
         state.company = matchingItems;
        }
    }
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search ,fetchOneData,setSelectedRowId,setFilter,fetchDataRequestSuccess,faildSetData,
  clearOneData,setCUData,setInquiry,fetchInquiry,sendData,setInquiryModel,changeRegisterType,completeFormData
  , fetchDataRequest, fetchDataFailed, setData ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
