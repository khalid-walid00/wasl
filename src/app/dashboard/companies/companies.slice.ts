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
  itemsSearch: []as any ,
  loading: false,
  error: false,
  company,
  companyId:"",
  filter:'' ,
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
    clearOneData: (state) => {
      state.company = company;
    },
    setFilter:(state, action) => {
      const  value  = action.payload;
      state.filter = value; 
      let filterValue = { WaslId: true, IsDeletedFromWasl: false };
    
      if (value === "Inactive") {
        filterValue = { WaslId: false, IsDeletedFromWasl: false };
      }
    
      if (value === "Delete") {
        filterValue = { WaslId: false, IsDeletedFromWasl: true };
      }
    
      if (value === " Active") {
        filterValue = { WaslId: true, IsDeletedFromWasl: false };
      }
      state.itemsSearch = state.items.Data.filter((item) =>  Boolean(item.WaslId) == filterValue.WaslId && Boolean(item.IsDeletedFromWasl) == filterValue.IsDeletedFromWasl
    
    )
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
        state.items.Data = state.items.Data?.filter(item => item.Id !== idsToRemove);
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
export const { setDataEmpty, addItem, setSearch , replaceItem, search ,fetchOneData,setSelectedRowId,setFilter,
  clearOneData,setCUData,setInquiry,fetchInquiry,sendData,setInquiryModel
  , fetchDataRequest, fetchDataFailed, setData ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
