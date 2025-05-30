import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

export const fecthTestimonial = createAsyncThunk('gallery.fecthTestimonial', async () => {
    const res = await axios.get(`${base_url}/testimonials/all`);
    console.log(res.data);
    return res.data;
});

const initialState = {
    testimonial: [],
    loading: false,
    error: null,
};

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fecthTestimonial.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fecthTestimonial.fulfilled, (state, action) => {
                state.loading = false;
                state.testimonial = action.payload;
            })
            .addCase(fecthTestimonial.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default testimonialSlice.reducer;
