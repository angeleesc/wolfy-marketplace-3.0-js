import { configureStore } from "@reduxjs/toolkit"
import languageReducerice from "../features/languages/languageSlice"
import modalSlide from "../features/modals/modalsSlice"
import web3Slice from "../features/web/web3Slice"
import axios from "axios"

const store = configureStore({
   reducer: {
      language: languageReducerice,
      modals: modalSlide,
      web3: web3Slice
   }
})

export default store