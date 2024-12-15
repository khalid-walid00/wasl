import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast } from "~/utils/libraries";

let url;
if (typeof window !== 'undefined') {
  url = new URL(window.location.href);
} else {
  url = new URL('http://localhost:3055');
}

interface SearchItems {
  type: string;
  value: string | null;
}

const searchItems: SearchItems = {
  type: '',
  value: null
};

interface DataTypes {
  Id: string;
  Account: number | null;
  VehicleNo: string;
  SequenceNumber: string;
  PlateNumber: string;
  PlateRightLetter: string;
  PlateMiddleLetter: string;
  WaslId: string | null;
  IsDeletedFromWasl: boolean;
  PlateLeftLetter: string;
  PlateType: number | null;
  IMEINumber: string;
  WASLVehicleKey: string;
  Response: string;
  RegistrationDate: string;
  Activity: string;
  Reply: string;
}


interface ItemsTypes {
  Data: DataTypes[];
  Message: string;
  StatusCode: boolean;
}
const vehicle: DataTypes | null = {
  Id: "",
  Account:null ,
  VehicleNo: "",
  WaslId: null,
  IsDeletedFromWasl: false,
  SequenceNumber: "",
  PlateNumber: "",
  PlateRightLetter: "",
  PlateMiddleLetter: "",
  PlateType: null,
  PlateLeftLetter: "",
  IMEINumber: "",
  WASLVehicleKey: "",
  Response: "",
  RegistrationDate: "",
  Activity: "",
  Reply: "",
};
interface StateTypes {
  items: ItemsTypes;
  loading: boolean;
  error: boolean;
  searchItems: SearchItems;
  itemsSearch: DataTypes[];
  inquiryLoading: boolean;
  inquiry: any;
  filter: string;
  vehicle: DataTypes | null;
  vehicleId: string | null;
  showModel: boolean;
  modalRow: boolean;
  inquiryModel: boolean;
  ActivityLoading: boolean;
}

const items: ItemsTypes = {
  Data: [
    {
      Id: "1",
      Account: 999,
      VehicleNo: "Vehicle-1234",
      SequenceNumber: "1234",
      PlateNumber: "1234",
      IsDeletedFromWasl: false,
      WaslId : "45254242",
      PlateRightLetter: "X",
      PlateMiddleLetter: "Y",
      PlateType: 2,
      PlateLeftLetter: "Z",
      IMEINumber: "23456789",
      WASLVehicleKey: "",
      Response: "Approved",
      RegistrationDate: "2024-11-20",
      Activity: "Active",
      Reply: "Success",
    },
    {
      Id: "3",
      Account: 888,
      VehicleNo: "Vehicle-5747",
      SequenceNumber: "1234",
      PlateNumber: "1234",
      PlateRightLetter: "X",
      IsDeletedFromWasl: false,
      WaslId : "",
      PlateMiddleLetter: "Y",
      PlateType: 6,
      PlateLeftLetter: "Z",
      IMEINumber: "23456789",
      WASLVehicleKey: "WASL123456",
      Response: "Approved",
      RegistrationDate: "2024-11-20",
      Activity: "Active",
      Reply: "Success",
    },
    {
      Id: "2",
      Account: 102,
      VehicleNo: "Vehicle-5678",
      SequenceNumber: "5678",
      PlateNumber: "5545",
      PlateRightLetter: "j",
      PlateMiddleLetter: "b",
      PlateType: 1,
      IsDeletedFromWasl: true,
      WaslId : "",
      PlateLeftLetter: "C",
      IMEINumber: "9885437545345",
      WASLVehicleKey: "WASL654321",
      Response: "Pending",
      RegistrationDate: "2023-05-15",
      Activity: "Inactive",
      Reply: "Processing",
    }
  ],
    
  Message:"",
  StatusCode:false
};

const initialState: StateTypes = {
  items: items,
  loading: false,
  error: false,
  showModel: false,
  searchItems,
  vehicle,
  filter:'' ,
  vehicleId: null,
  itemsSearch: [],
  inquiryLoading: false,
  inquiry: [],
  inquiryModel: false,
  modalRow: false,
  ActivityLoading: false,
};

export const vehiclesSlice = createSlice({
  name: "vehiclesSlice",
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
      state.vehicleId = action.payload;
      const vehicle = state.items.Data.find((item) => item.Id === action.payload);
       if (vehicle) {
        state.vehicle = vehicle;
      }
    },
    fetchInquiry: (state, action) => {
      state.inquiryLoading = true;
    },
    
    setInquiry: (state, action) => {
      state.inquiry = action.payload;
    },
    setData: (state, action: PayloadAction<ItemsTypes>) => {
      state.items = action.payload;
      state.loading = false;
    },
    setCUData: (state, action) => {
      state.vehicle =  {...state.vehicle, ...action.payload};
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    sendData: (state) => {
      state.loading = true;
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
    search: (state) => {
      const { type, value } = state.searchItems;
      if (value !== null) {
        const matchingItems = state.items.Data.filter((item: any) => 
          item[type] && item[type].toString().includes(value)
        );
        console.log("matchingItems", matchingItems);
        state.itemsSearch = matchingItems;
      } else {
        state.itemsSearch = [];
      }
    },
    addItem: (state, action: PayloadAction<DataTypes>) => {
      state.items.Data.unshift(action.payload);
    },
    replaceItem: (state, action: PayloadAction<{ Data: Partial<DataTypes> & { Id: string } }>) => {
      const Data  = action.payload.Data;
      const index = state.items.Data.findIndex((item) => item.Id === Data?.Id);
      if (index !== -1) {
        state.items.Data[index] = { ...state.items.Data[index], ...Data };
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const idsToRemove = action.payload;
      state.items.Data = state.items.Data.filter((item) => item.Id !== idsToRemove);
    },
    clearVehicle: (state) => {
      state.vehicle = vehicle;
      state.vehicleId = null;
      state.showModel = !state.showModel;
  },
  clearOneData: (state) => {
    state.vehicle = vehicle;
  },
    toggleModel: (state,action) => { 
      state.showModel = !state.showModel;
      if (action.payload) state.vehicleId = action.payload;
    },
    setSelectedRowId: (state, action) => {
      if(action.payload ) state.vehicleId = action.payload;
      state.modalRow =  !state.modalRow
      if(!state.modalRow) state.vehicleId=null
    },
    setInquiryModel: (state, action) => {
      if(action.payload) state.inquiry = action.payload;
      state.inquiryModel =  !state.inquiryModel
    },
  }
});

export const {
  setDataEmpty,
  addItem,
  setSearch,
  toggleModel,
  clearVehicle,
  clearOneData,
  replaceItem,
  setCUData,
  search,
  setInquiry,
  fetchInquiry,
  sendData,
  fetchDataRequest,
  fetchDataFailed,
  fetchOneData,
  setData,
  setFilter,
  deleteItem,
  setSelectedRowId,
  setInquiryModel
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
