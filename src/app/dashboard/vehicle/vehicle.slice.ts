import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchItems {
  type: string;
  value: string | null;
}

const searchItems: SearchItems = {
  type: '',
  value: null
};

interface VehiclePlate {
  Number: string;
  RightLetter: string;
  MiddleLetter: string;
  LeftLetter: string;
}

interface DataTypes {
  Id: string;
  WaslId: string | null;
  IsDeletedFromWasl: boolean;
  CreatedDate: string;
  Activity: string;
  CreatedBy: string;
  OperationCompanyId: string;
  SequenceNumber: string;
  VehiclePlate: VehiclePlate;
  PlateType: number;
  ImeiNumber: string;
  VehicleInfo: any; 
}

interface ItemsTypes {
  Data: DataTypes[];
  Message: string;
  StatusCode: boolean;
}

const vehicle: any | null = {
  Id: "",
  WaslId: null,
  IsDeletedFromWasl: false,
  CreatedDate: "",
  Activity: "DEFAULT",
  CreatedBy: "",
  OperationCompanyId: "",
  SequenceNumber: "",
  VehiclePlate: {
    Number: "",
    RightLetter: "",
    MiddleLetter: "",
    LeftLetter: "",
  },
  PlateType: 1,
  ImeiNumber: "",
  VehicleInfo: null,
};

interface StateTypes {
  items: ItemsTypes;
  loading: boolean;
  error: boolean;
  searchItems: SearchItems;
  itemsSearch: DataTypes[];
  inquiryLoading: boolean;
  inquiry: any;
  errors:any;
  filter: string;
  vehicle: any | null;
  vehicleId: string | null;
  showModel: boolean;
  modalRow: boolean;
  inquiryModel: boolean;
  ActivityLoading: boolean;
}

const items: ItemsTypes = {
  Data: [],
  Message: "",
  StatusCode: false
};

const initialState: StateTypes = {
  items: items,
  loading: false,
  error: false,
  errors: [],
  showModel: false,
  searchItems,
  vehicle,
  filter: '',
  vehicleId: null,
  itemsSearch: [],
  inquiryLoading: false,
  inquiry: {},
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
    fetchDataRequestSuccess(state) {
      state.loading = false;
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
      console.log("setInquiry", action.payload);
      state.inquiry = action.payload;
    },
    setData: (state, action: PayloadAction<ItemsTypes>) => {
      state.items = action.payload;
      state.loading = false;
    },
    setCUData: (state, action) => {
      state.vehicle = { ...state.vehicle, ...action.payload };
    },
    faildSetData: (state, action) => {
      state.errors = action.payload;
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
    },
    sendData: (state) => {
      state.loading = true;
    },
    setFilter: (state, action) => {
      const value = action.payload;
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

      const newData = state?.items?.Data?.filter(
        (item) =>
          Boolean(item.WaslId) == filterValue.WaslId &&
          Boolean(item.IsDeletedFromWasl) == filterValue.IsDeletedFromWasl
      );
      state.itemsSearch = newData;
    },
    search: (state) => {
      const { type, value } = state.searchItems;
      if (value !== null) {
        const matchingItems = state.items.Data.filter(
          (item: any) =>
            item[type] && item[type].toString().includes(value)
        );
        state.itemsSearch = matchingItems;
      } else {
        state.itemsSearch = [];
      }
    },
    addItem: (state, action: any) => {
      state.items.Data.unshift(action.payload?.Data);
    },
    replaceItem: (state, action: PayloadAction<{ Data: Partial<DataTypes> & { Id: string } }>) => {
      const Data = action.payload.Data;
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
    toggleModel: (state, action) => {
      state.showModel = !state.showModel;
      if (action.payload) state.vehicleId = action.payload;
    },
    setSelectedRowId: (state, action) => {
      if (action.payload) state.vehicleId = action.payload;
      state.modalRow = !state.modalRow;
      if (!state.modalRow) state.vehicleId = null;
    },
    setInquiryModel: (state, action) => {
      if (action.payload) state.inquiry = action.payload;
      state.inquiryModel = !state.inquiryModel;
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
  faildSetData,
  deleteItem,
  fetchDataRequestSuccess,
  setSelectedRowId,
  setInquiryModel
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
