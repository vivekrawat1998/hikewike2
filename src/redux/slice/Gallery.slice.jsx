import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

export const fetchgallery = createAsyncThunk('gallery/fetchGallery', async () => {
    const res = await axios.get(`${base_url}/gallery/all`);
    return res.data;
});

const initialState = {
    gallery: [],
    loading: false,
    error: null,
};

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchgallery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchgallery.fulfilled, (state, action) => {
                state.loading = false;
                state.gallery = action.payload;
            })
            .addCase(fetchgallery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default gallerySlice.reducer;
