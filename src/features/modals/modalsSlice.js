import { createSlice, } from "@reduxjs/toolkit";

export const keyModalSate = {
  checkoutModal: "checkoutModal",
  mintModal: "mintModal"
};


const modalSlide = createSlice({
  name: "modals",
  initialState: {
    checkoutModal: {
      open: false,
      dataToProccess: {},
    },
    mintModal: {
      open: false,
      dataToProccess: {},
    }
  },
  reducers: {
    openModal: (state, action) => {
      //    console.log(action)
      state[action.payload.modal] = {
        ...(action.payload.data && {
          dataToProccess: { ...action.payload.data },
        }),
        open: true,
      };
    },

    closeModal: (state, actions) => {
      state[actions.payload.modal] = {
        ...(actions.payload.data && {
          dataToProccess: { ...actions.payload.data },
        }),
        open: false,
      };
    },
  },
});

export default modalSlide.reducer;

export const { openModal, closeModal } = modalSlide.actions;
