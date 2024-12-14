import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";
import { Toast } from "~/utils/libraries";

let url;
if (typeof window !== 'undefined') {
  url = new URL(window.location.href);
} else {
  url = new URL('http://localhost:3055');
}

interface SearchItems {
  type: string;
  value: string;
}

const searchItems: SearchItems = {
  type: '',
  value: ''
};

interface DataTypes {
  Id: string;
  Account: number;
  VehicleNo: string;
  SequenceNumber: string;
  PlateNumber: string;
  PlateRightLetter: string;
  PlateMiddleLetter: string;
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
  Account:66 ,
  VehicleNo: "",
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
  vehicle: DataTypes | null;
  vehicleId: string | null;
  showModel: boolean;
  page: number;
  limit: number;
}

const items: ItemsTypes = {
  Data: [
    {
      Id: "1",
      Account: 999,
      VehicleNo: "Vehicle-1234",
      SequenceNumber: "1234",
      PlateNumber: "1234",
      PlateRightLetter: "X",
      PlateMiddleLetter: "Y",
      PlateType: 2,
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
  vehicleId: null,
  itemsSearch: [],
  inquiryLoading: false,
  inquiry: [],
  page: Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number(url.searchParams.get("limit") || pagination.defaultLimit),

};

export const vehiclesSlice = createSlice({
  name: "vehiclesSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.items = items;
      state.page = pagination.defaultPage;
      state.limit = pagination.defaultLimit;
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
    fetchInquiry: (state) => {
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
    setLimit: (state, action: PayloadAction<number>) => {
      state.page = 1;
      state.limit = action.payload;
      state.loading = true;
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    sendData: (state) => {
      state.loading = true;
    },
    search: (state) => {
      const { type, value } = state.searchItems;    
      const company = state.items.Data.find((item: any) => {
        if (value !== "") return item[type] && item[type].toString().includes(value); 
      });    
      if (company) {
        state.itemsSearch = [company];  
      } else {
        state.itemsSearch = []; 
        Toast.fire({
          icon: "error",
          title: "Vehicle not found",
        });
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
    }
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
  setLimit,
  deleteItem
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
