import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

export const fetchOurteam = createAsyncThunk('gallery.fetchOurteam', async () => {
    const res = await axios.get(`${base_url}/ourteam/all`);
    return res.data;
});

const initialState = {
    ourteam: [],
    loading: false,
    error: null,
};

const ourteamSlice = createSlice({
    name: 'ourteam',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOurteam.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOurteam.fulfilled, (state, action) => {
                state.loading = false;
                state.ourteam = action.payload;
            })
            .addCase(fetchOurteam.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default ourteamSlice.reducer;
