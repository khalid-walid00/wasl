import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchItems {
  type: string;
  value: string | null  | number;
}

const searchItems: SearchItems = {
  type: '',
  value: null
};

interface DataTypes {
  Id: string;
  EntityType: number;
  EntityId: string;
  Endpoint: string;
  Method: string;
  RequestBody: any; 
  ResponseBody: any;
  StatusCode: number;
  Error: string; 
  RequestTime: string;
  ResponseTime: string;
  RequestDurationInSeconds:number
}

interface ItemsTypes {
  Data: DataTypes[];
  Message: string;
  StatusCode: boolean;
}

const request: DataTypes | null = {
  Id: '',
  EntityType: 0,
  EntityId: '',
  Endpoint: '',
  Method: '',
  RequestBody: {},
  ResponseBody: {},
  StatusCode: 400,
  Error: '',
  RequestTime: '',
  ResponseTime: '',
  RequestDurationInSeconds:0
};

interface StateTypes {
  items: ItemsTypes;
  loading: boolean;
  error: boolean;
  searchItems: SearchItems;
  itemsSearch: DataTypes[];
  inquiryLoading: boolean;
  inquiry: any;  
  request: DataTypes | null;
  requestId: string | null;
  showModel: boolean;
  modalRow: boolean;
  inquiryModel: boolean;
  ActivityLoading: boolean;
}

const items: ItemsTypes = {
  Data:[],
  Message: "",
  StatusCode: false
};

const initialState: StateTypes = {
  items: items,
  loading: false,
  error: false,
  showModel: false,
  searchItems,
  request,
  requestId: null,
  itemsSearch: [],
  inquiryLoading: false,
  inquiry: [],
  inquiryModel: false,
  modalRow: false,
  ActivityLoading: false,
};

export const requestsLogSlice = createSlice({
  name: "requestsLogSlice",
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
      state.requestId = action.payload;
      const request = state.items.Data.find((item) => item.Id === action.payload);
      if (request) {
        state.request = request;
      }
    },
    fetchInquiry: (state, action) => {
      state.inquiryLoading = true;
    },
    fetchDataRequestSuccess(state) {
      state.loading = false;
    },
    setInquiry: (state, action) => {
      state.inquiry = action.payload;
    },
    setData: (state, action: PayloadAction<ItemsTypes>) => {
      state.items = action.payload;
      state.loading = false;
    },
    setCUData: (state, action) => {
      state.request = { ...state.request, ...action.payload };
    },
    setSearch: (state, action) => {
      const { type, value } = action.payload;
      state.searchItems.type = type;
      state.searchItems.value = value;
      
      if (value !== null) {
        const matchingItems = state.items?.Data?.filter((item: any) =>
          item[type] && item[type].toString().includes(value)
      );
        state.itemsSearch = matchingItems;
      } else {
        state.itemsSearch = [];
      }

     },
    sendData: (state) => {
      state.loading = true;
    },

    addItem: (state, action: PayloadAction<DataTypes>) => {
      state.items.Data.unshift(action.payload);
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
    clearRequest: (state) => {
      state.request = request;
      state.requestId = null;
      state.showModel = !state.showModel;
    },
    clearOneData: (state) => {
      state.request = request;
    },
    toggleModel: (state, action) => {
      state.showModel = !state.showModel;
      if (action.payload) state.requestId = action.payload;
    },
    setSelectedRowId: (state, action) => {
      if (action.payload) state.requestId = action.payload;
      state.modalRow = !state.modalRow;
      if (!state.modalRow) state.requestId = null;
    },
    setInquiryModel: (state, action) => {
      if (action.payload) state.inquiry = action.payload;
      state.inquiryModel = !state.inquiryModel;
    }
  }
});

export const {
  setDataEmpty,
  addItem,
  setSearch,
  toggleModel,
  clearRequest,
  clearOneData,
  fetchDataRequestSuccess,
  replaceItem,
  setCUData,
  setInquiry,
  fetchInquiry,
  sendData,
  fetchDataRequest,
  fetchDataFailed,
  fetchOneData,
  setData,
  deleteItem,
  setSelectedRowId,
  setInquiryModel
} = requestsLogSlice.actions;

export default requestsLogSlice.reducer;
