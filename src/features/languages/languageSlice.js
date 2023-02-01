import { createSlice } from "@reduxjs/toolkit"

const languageSlice = createSlice({
    name: "languageSettings",
    initialState: {
        languageDef: "es",
        navBar: {
            exporeOptionTextUi: "explorar",
            createOptionUi: "Crear",
            resurseOptionUi: "Recursos",

            dropMenuSection:{
                exporeOptionTextUi: {
                    name: "explorar",
                    dorpMenuOptions:{
                        NftsTextUi:"Nfts",
                        CollectionTextUi: "Coleciones"
                    }
                }
            }
        },

    },
    reducers: {

    }
})

export default languageSlice.reducer