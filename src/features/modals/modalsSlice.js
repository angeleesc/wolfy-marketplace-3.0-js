import { createSlice } from "@reduxjs/toolkit";

export const keyModalSate = {
    chakoutModal: "chakoutModal",
}

const modalSlide = createSlice({
  name: "modals",
  initialState: {
    chakoutModal: {
      open: true,
      dataToProccess: {},
    },
  },
  reducers: {
    openModal: (state, action)=>{
       console.log(action)
    }
  },
});

export default modalSlide.reducer;

export const { openModal } = modalSlide.actions 
