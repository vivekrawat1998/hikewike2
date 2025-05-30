import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

export const submitContactForm = createAsyncThunk('contact/submitForm', async (formData) => {
    const response = await axios.post(`${base_url}/contactQuery`, formData);
    return response.data;  
});

const initialState = {
    loading: false,
    error: null,
    success: null,
};

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState,       
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitContactForm.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = null;
            })
            .addCase(submitContactForm.fulfilled, (state, action) => {
                state.loading = false;
                state.success = "Form submitted successfully!";
            })
            .addCase(submitContactForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default contactFormSlice.reducer;
