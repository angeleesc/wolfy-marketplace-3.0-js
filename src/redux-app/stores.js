import { configureStore } from "@reduxjs/toolkit"
import languageReducerice from "../features/languages/languageSlice"

const store = configureStore({
 reducer: {
    language: languageReducerice
 }
})

export default store