import { configureStore } from "@reduxjs/toolkit"
import languageReducerice from "../features/languages/languageSlice"
import modalSlide from "../features/modals/modalsSlice"

const store = configureStore({
 reducer: {
    language: languageReducerice,
    modals: modalSlide
 }
})

export default store