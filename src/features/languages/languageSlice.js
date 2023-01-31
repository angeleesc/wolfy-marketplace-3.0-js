import { createSlice } from "@reduxjs/toolkit"

const languageSlice = createSlice({
    name: "languageSettings",
    initialState: {
        languageDef: "es",
        navBar: {
            exporeOptionTextUi: "explorar",
            createOptionUi: "Crear",
            resurseOptionUi: "Recursos",
        }
    },
    reducers: {

    }
})

export default languageSlice.reducer