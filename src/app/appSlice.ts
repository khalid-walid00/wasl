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
  },
});

export const { setLoading, mainToggle, setUser, appLoad, toggleSideBar,toggleBuilder, setRedirectTo, resetRedirect } = reducer.actions;
export const configuerStore = reducer.reducer