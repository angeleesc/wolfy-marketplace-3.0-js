import { createSlice } from "@reduxjs/toolkit";

const modalSlide = createSlice({
  name: "modals",
  initialState: {
    chakoutModal: {
      open: true,
      dataToProccess: {},
    },
  },
  reducers: {},
});

export default modalSlide.reducer;
