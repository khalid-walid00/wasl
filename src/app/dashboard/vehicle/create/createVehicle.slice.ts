import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  vehicle: {},
  vehicleId: null,
    loading: true,
    error: false,
    page: 1,
    limit: 10,
    showModel:false,
};

export const createVehicleSlice = createSlice({
    name: "createVehicleSlice", 
    initialState,
    reducers: {
  
        fetchData: (state) => {
          state.loading = true;
        },
        sendData: (state) => {
          state.loading = false;
        },
        fetchDataFailed: (state) => {
          state.error = true;
        },
        
        clearVehicle: (state) => {
          state.vehicle = {};
          state.vehicleId = null;
          state.showModel = !state.showModel;
      },
        toggleModel: (state) => { 
          state.showModel = !state.showModel;
     
        }
    }
})

export const { fetchData,fetchDataFailed,toggleModel,clearVehicle} = createVehicleSlice.actions;
export default createVehicleSlice.reducer;
