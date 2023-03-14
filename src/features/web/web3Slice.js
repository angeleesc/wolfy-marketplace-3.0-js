import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const urlApir = "https://jsonplaceholder.typicode.com/posts"

const getpost = createAsyncThunk("web3/fetchPost", async () => {

    try {
        const response = await axios.get(urlApir)
        return [...response.data]
    } catch (error) {
        return error.message
    }

})

const web3Slide = createSlice({
    name: "web3",
    initialState: {
        walletAcc: "xd",
        post: []
    },
    reducers: {
        setWalletAccount: (state, action) => {
            state.walletAcc = "0x436F2Cf047e6A3F32cba7c5f9208518747320CC8"
        }
    },
    // extraReducers

})

export default web3Slide.reducer

export const { setWalletAccount } = web3Slide.actions