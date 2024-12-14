import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";

let url;
if (typeof window !== 'undefined') {
  url = new URL(window.location.href);
} else {
  url = new URL('http://localhost:3055');
}

interface SearchItems {
  title: string | null;
  search: string | null;
  status: string | null;
  date: string | null;
  sort: string | null;
}

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
  pagination: PaginationType;
}

interface StateTypes {
  items: ItemsTypes;
  loading: boolean;
  error: boolean;
  searchitems: SearchItems;
  page: number;
  limit: number;
  pagination: PaginationType;
}

const items: ItemsTypes = {
  Data: [
    {
      _id: "1",
      Account: 101,
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
  pagination: {
    totalCount: 0,
    totalPages: 0
  }
};

// الحالة الابتدائية مع الأنواع
const initialState: StateTypes = {
  items: items,
  loading: false,
  error: false,
  searchitems: {
    title: null,
    search: null,
    status: null,
    date: null,
    sort: null
  },
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
    setSearch: (state, action: PayloadAction<Partial<SearchItems>>) => {
      state.searchitems = { ...state.searchitems, ...action.payload };
    },
    search: (state) => {
      state.page = 1;
      state.loading = true;
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
