import { createSlice } from "@reduxjs/toolkit";
import { pagination } from "~/config/constant";

let url; if (typeof window !== 'undefined') { url = new URL(window.location.href); } else { url = new URL('http://localhost:3055') }
const searchitems = {
  title: null,
  search: null,
  status: null,
  date: null,
  sort: null
}
interface dataTypes {
  _id: string,
}
interface PaginationType {
  totalCount: number,
  totalPages: number,
}

interface itemsTypes {
  data: dataTypes[],
  pagination: PaginationType;
}
const items : itemsTypes = {
  data: [],
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
}

const initialState = {
  items: items,
  loading: false,
  error: false,
  searchitems,
  page:  Number(url.searchParams.get("page") || pagination.defaultPage),
  limit: Number( url.searchParams.get("limit") || pagination.defaultLimit)  ,
  pagination: {
    totalCount: 0,
    totalPages: 0,
  },
};



export const companiesSlice = createSlice({
  name: "companiesSlice",
  initialState,
  reducers: {
    setDataEmpty: (state) => {
      state.items = items;
      state.page =  pagination.defaultPage;
      state.limit = pagination.defaultLimit;
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
    setLimit: (state, action) => {     
      state.page = 1; 
      state.limit = action.payload;
      state.loading = true;
    }, 
    setSearch: (state,action) => {
      state.searchitems = {...state.searchitems, ...action.payload};
    },
    search: (state) => {
      state.page = 1;
      state.loading = true;
    },
    addItem: (state, action) => {
    
        state.items.data.unshift(action.payload)
      
    },
    replaceItem: ( state , action ) => {
      const { data } = state.items;
      const { payload } = action;
    
      const index = data.findIndex((item:any ) => item._id === payload._id);
    
      if (index !== -1) {
        state.items.data[index] = {
          ...state.items.data[index],
          ...payload.data 
        };
      }
    }, 
    deleteItem: (state, action) => {
     const idsToRemove =action.payload
        state.items.data = state.items.data?.filter(item => item._id !== idsToRemove);
    },
    setPage:(state,action)=>{
      state.page = +action.payload; 
      state.loading = true;
    },
  }
})
export const { setDataEmpty, addItem, setSearch , replaceItem, search , setPage
  , fetchDataRequest, fetchDataFailed, setData , nextPage , prevPage, setLimit ,deleteItem } = companiesSlice.actions;
export default companiesSlice.reducer;
