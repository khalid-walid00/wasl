import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  step: 1,
  data:{},
  loading:false
};

export const forgetPassword = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    goToStep: (state, { payload }: { payload: number }) => {
      state.step = payload;
    },
    setData:(state,{payload})=>{
      state.data= {...state.data, ...payload};
      state.loading=true;
    }
  },
});

export const {
  goToStep,
  setData
} = forgetPassword.actions;
export default forgetPassword.reducer;
