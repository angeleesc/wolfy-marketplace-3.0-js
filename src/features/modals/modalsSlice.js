import { createSlice } from "@reduxjs/toolkit";

export const keyModalSate = {
    checkoutModal: "checkoutModal",
};

const modalSlide = createSlice({
  name: "modals",
  initialState: {
    checkoutModal: {
      open: false,
      dataToProccess: {},
    },
  },
  reducers: {
    openModal: (state, action) => {
      //    console.log(action)
      state[action.payload.modal] = {
        dataToProccess: { ...action.payload.data },
        open: true,
      };
    },

    closeModal: (state, actions) => {
      state[actions.payload.modal] = {
        dataToProccess: { ...actions.payload.data },
        open: false,
      };
    },
  },
});

export default modalSlide.reducer;

export const { openModal } = modalSlide.actions;
