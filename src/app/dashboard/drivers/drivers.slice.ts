import { createSlice } from "@reduxjs/toolkit";

const searchItems = {
  type: "",
  value: "",
}
interface dataTypes {
  driverId: number,
  driverName: string,
  driverNameArabic: string,
  driverAssignedAsset: string,
  WaslId: string,
  IsDeletedFromWasl:boolean,
  licenseNumber: string,
  licenseNumberArabic: string,
  mobileNumber: string,
  tagid: string,
  licenseExpiry: string
}
const driver: dataTypes = {
  driverId: 0,
  driverName: "",
  driverNameArabic: "",
  driverAssignedAsset: "",
  licenseNumber: "",
  IsDeletedFromWasl:false,
  WaslId:"",
  licenseNumberArabic: "",
  mobileNumber: "",
  tagid: "",
  licenseExpiry: "",
};

interface itemsTypes {
  Data: dataTypes[],
  Message:string,
  StatusCode:boolean

}
const items: itemsTypes = {
  Data: [],
  Message:"",
  StatusCode:false
}

const initialState = {
  items: items,
  driver,
  driverId: null as string | null,
  loading: false,
  error: false,
  searchItems,
  filter: "",
  itemsSearch: [] as any,
  inquiry: {},
  inquiryLoading: false,
  inquiryModel: false,
  modalRow: false,
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
};



export const driversSlice = createSlice({
  name: "driversSlice",
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
    fetchOneData: (state, action) => {
      state.driverId = action.payload;
      const driver = state.items?.Data.find((item) => item.driverId === action.payload);
       if (driver) {
        state.driver = driver;
      }
    },
    setData: (state, action) => {
      state.items = action.payload;
      state.loading = false;
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
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      console.log(type, value);
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    search: (state) => {
      const { type, value } = state.searchItems;
      if (value !== "") {
        const matchingItems = state.items.Data.filter((item: any) =>
          item[type] && item[type].toString().includes(value)
        );
        console.log(matchingItems);
        state.itemsSearch = matchingItems;
      } else {
        state.itemsSearch = [];
      }
    },
    addItem: (state, action) => {

      state.items.Data.unshift(action.payload)

    },
    replaceItem: (state, action) => {
      const { Data } = state.items;
      const { payload } = action;

      const index = Data.findIndex((item: any) => item._id === payload._id);

      if (index !== -1) {
        state.items.Data[index] = {
          ...state.items.Data[index],
          ...payload.Data
        };
      }
    },
    deleteItem: (state, action) => {
      const idsToRemove = action.payload
      state.items.Data = state.items.Data?.filter(item => item.driverId !== idsToRemove);
    },
    clearOneData: (state) => {
      state.driver = driver;
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
    setSelectedRowId: (state, action) => {
      if (action.payload) state.driverId = action.payload;
      state.modalRow = !state.modalRow
      if (!state.modalRow) state.driverId = null
    },
    setInquiryModel: (state, action) => {
      if (action.payload) state.driver = action.payload;
      state.inquiryModel = !state.inquiryModel
    },
  }
})
export const { setDataEmpty, addItem, 
  setSearch, replaceItem, search,
   setInquiryModel, setSelectedRowId,sendData,
   fetchDataRequest, fetchDataFailed,
   clearOneData,fetchOneData,
   setFilter,
   setData,
   fetchInquiry,
   setInquiry,
    deleteItem } = driversSlice.actions;
export default driversSlice.reducer;
