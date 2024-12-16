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
}
const items: itemsTypes = {
  Data: [
    {
      driverId: 1,
      driverName: "Ahmad Ali",
      IsDeletedFromWasl:false,
      WaslId:"",
      driverNameArabic: "أحمد علي",
      driverAssignedAsset: "ABC123456",
      licenseNumber: "AB12345",
      licenseNumberArabic: "أ ب ١٢٣٤٥",
      mobileNumber: "+201234567890",
      tagid: "BMW X5",
      licenseExpiry: "2025-12-31",
    },
    {
      driverId: 2,
      driverName: "Sara Mohammed",
      driverNameArabic: "سارة محمد",
      driverAssignedAsset: "XYZ987654",
      IsDeletedFromWasl:true,
      WaslId:"",
      licenseNumber: "XY98765",
      licenseNumberArabic: "إكس واي ٩٨٧٦٥",
      mobileNumber: "+202345678901",
      tagid: "Toyota Camry",
      licenseExpiry: "2026-07-15",
    },
    {
      driverId: 3,
      driverName: "Mohamed Hassan",
      driverNameArabic: "محمد حسن",
      driverAssignedAsset: "LMN456789",
      licenseNumber: "LM45678",
      IsDeletedFromWasl:true,
      WaslId:"453543453",
      licenseNumberArabic: "إل إم ٤٥٦٧٨",
      mobileNumber: "+203456789012",
      tagid: "Honda Accord",
      licenseExpiry: "2024-03-10",
    },
    {
      driverId: 4,
      driverName: "Ali Ahmed",
      driverNameArabic: "علي أحمد",
      driverAssignedAsset: "DEF345678",
      licenseNumber: "DEF34567",
      IsDeletedFromWasl:false,
      WaslId:"4535434345",
      licenseNumberArabic: "دي إف ٣٤٥٦٧",
      mobileNumber: "+204567890123",
      tagid: "Mazda 3",
      licenseExpiry: "2025-08-22",
    },
    {
      driverId: 5,
      driverName: "Mona Khaled",
      driverNameArabic: "مونا خالد",
      driverAssignedAsset: "OPQ789123",
      IsDeletedFromWasl:true,
      WaslId:"",
      licenseNumber: "OP78912",
      licenseNumberArabic: "أو بي ٧٨٩١٢",
      mobileNumber: "+205678901234",
      tagid: "Nissan Altima",
      licenseExpiry: "2027-01-01",
    },
    {
      driverId: 6,
      driverName: "Omar Farouk",
      driverNameArabic: "عمر فاروق",
      driverAssignedAsset: "JKL234567",
      IsDeletedFromWasl:false,
      WaslId:"785275",
      licenseNumber: "JK23456",
      licenseNumberArabic: "جي كيه ٢٣٤٥٦",
      mobileNumber: "+206789012345",
      tagid: "Chevrolet Malibu",
      licenseExpiry: "2024-09-30",
    },
    {
      driverId: 7,
      driverName: "Fatima Zaynab",
      driverNameArabic: "فاطمة زينب",
      driverAssignedAsset: "PQR567890",
      licenseNumber: "PQ56789",
      IsDeletedFromWasl:false,
      WaslId:"",
      licenseNumberArabic: "بي كي ٥٦٧٨٩",
      mobileNumber: "+207890123456",
      tagid: "Ford Mustang",
      licenseExpiry: "2026-02-14",
    },
    {
      driverId: 8,
      driverName: "Khaled Mahmoud",
      driverNameArabic: "خالد محمود",
      IsDeletedFromWasl:false,
      WaslId:"696986",
      driverAssignedAsset: "UVW890123",
      licenseNumber: "UV89012",
      licenseNumberArabic: "يو في ٨٩٠١٢",
      mobileNumber: "+208901234567",
      tagid: "Audi A4",
      licenseExpiry: "2025-11-25",
    }
  ],
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
