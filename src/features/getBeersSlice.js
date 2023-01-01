import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const beersUrl = "https://api.punkapi.com/v2/beers";

const initialState = {
    loading: false,
    beers: [],
    error: ''
}

export const fetchBeers = createAsyncThunk("beers/fetchBeers",(numberOfpage)=>{
    return axios.get(`${beersUrl}?brewed_after=03-2000&page=${numberOfpage}`).then(response=>{
        return response.data
    })
})

const beersSlice = createSlice({
    name: "beers",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchBeers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchBeers.fulfilled,(state, action)=>{
            state.loading = false
            state.beers = action.payload
            state.error =  ''
        })
        builder.addCase(fetchBeers.rejected,(state, action)=>{
            state.loading = false
            state.beers = []
            state.error =  action.error.message
        })
    }
})

export default beersSlice.reducer