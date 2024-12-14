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
  _id: string;
  Account: number;
  VehicleNo: string;
  SequenceNumber: string;
  PlateNumber: string;
  PlateRightLetter: string;
  PlateMiddleLetter: string;
  PlateType: string;
  PlateLeftLetter: string;
  IMEINumber: string;
  WASLVehicleKey: string;
  Response: string;
  RegistrationDate: string;
  Activity: string;
  Reply: string;
  Actions: string;
}

interface PaginationType {
  totalCount: number;
  totalPages: number;
}

interface ItemsTypes {
  Data: DataTypes[];
  Message: string;
  StatusCode: boolean;
}

interface StateTypes {
  items: ItemsTypes;
  loading: boolean;
  error: boolean;
  searchItems: SearchItems;
  itemsSearch: DataTypes[];
  page: number;
  limit: number;
  pagination: PaginationType;
}

const items: ItemsTypes = {
  Data: [
    {
      _id: "1",
      Account: 999,
      VehicleNo: "Vehicle-1234",
      SequenceNumber: "1234",
      PlateNumber: "XYZ1234",
      PlateRightLetter: "X",
      PlateMiddleLetter: "Y",
      PlateType: "Private",
      PlateLeftLetter: "Z",
      IMEINumber: "IMEI123456789",
      WASLVehicleKey: "WASL123456",
      Response: "Approved",
      RegistrationDate: "2024-11-20",
      Activity: "Active",
      Reply: "Success",
      Actions: "Actions"
    },
    {
      _id: "2",
      Account: 102,
      VehicleNo: "Vehicle-5678",
      SequenceNumber: "5678",
      PlateNumber: "ABC5678",
      PlateRightLetter: "A",
      PlateMiddleLetter: "B",
      PlateType: "Commercial",
      PlateLeftLetter: "C",
      IMEINumber: "IMEI987654321",
      WASLVehicleKey: "WASL654321",
      Response: "Pending",
      RegistrationDate: "2023-05-15",
      Activity: "Inactive",
      Reply: "Processing",
      Actions: "Actions"
    }
  ],
    
  Message:"",
  StatusCode:false
};

const initialState: StateTypes = {
  items: items,
  loading: false,
  error: false,
  searchItems,
  itemsSearch: [],
  page: Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number(url.searchParams.get("limit") || pagination.defaultLimit),
  pagination: {
    totalCount: 0,
    totalPages: 0
  }
};

// إنشاء الـ Slice
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
    setData: (state, action: PayloadAction<ItemsTypes>) => {
      state.items = action.payload;
      state.loading = false;
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
    replaceItem: (state, action: PayloadAction<{ _id: string; Data: Partial<DataTypes> }>) => {
      const { _id, Data } = action.payload;
      const index = state.items.Data.findIndex((item) => item._id === _id);
      if (index !== -1) {
        state.items.Data[index] = { ...state.items.Data[index], ...Data };
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const idsToRemove = action.payload;
      state.items.Data = state.items.Data.filter((item) => item._id !== idsToRemove);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      state.loading = true;
    }
  }
});

export const {
  setDataEmpty,
  addItem,
  setSearch,
  replaceItem,
  search,
  setPage,
  fetchDataRequest,
  fetchDataFailed,
  setData,
  nextPage,
  prevPage,
  setLimit,
  deleteItem
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
