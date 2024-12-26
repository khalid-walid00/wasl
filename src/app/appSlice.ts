import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  showModel: false,
  mainData: null,
  appLoading: false,
  showSideBar: true,
  showBuilder: true,
  user: {},
  redirectTo: null as string | null,
  ActivityLoading: false,
  companyLoading: false,
  Activity: [],
  company: [],
}

export const reducer = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    mainToggle: (state, action) => {
      if (!state.showModel) {
        state.loading = true
      }
      state.mainData = action.payload
      state.showModel = !state.showModel;
    },
    appLoad: (state) => {
      state.appLoading = true;
    },
    setUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
      state.loading = false
    },
    toggleSideBar: (state, action: {payload: boolean}) => {
        state.showSideBar = action.payload;
    },
    toggleBuilder: (state) => {
      state.showBuilder = !state.showBuilder
    },
    setRedirectTo(state, action) {
      state.redirectTo = action.payload;
    },
    resetRedirect(state) {
      state.redirectTo = null;
    },
    fetchActivity: (state) => {
      state.ActivityLoading = true;
    },
    setActivity: (state, action) => {
      state.ActivityLoading = false;
      state.Activity = action.payload;
    },
    fetchCompany: (state) => {
      state.companyLoading = true;
    },
    setCompany: (state, action) => {
      state.companyLoading = false;
      state.company = action.payload;
    },
  },
});

export const { setLoading, mainToggle, setUser, appLoad, fetchActivity, setActivity,setCompany,fetchCompany,
   toggleSideBar,toggleBuilder, setRedirectTo, resetRedirect } = reducer.actions;
export const configuerStore = reducer.reducer