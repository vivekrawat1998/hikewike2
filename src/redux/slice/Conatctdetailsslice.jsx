import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

// Thunks for each API
export const fetchEmail = createAsyncThunk('contactdetails/fetchEmail', async () => {
    const res = await axios.get(`${base_url}/email/all`);
    return res.data?.data ?? res.data;
});

export const fetchAddress = createAsyncThunk('contactdetails/fetchAddress', async () => {
    const res = await axios.get(`${base_url}/address/all`);
    return res.data?.data ?? res.data;
});

export const fetchPhone = createAsyncThunk('contactdetails/fetchPhone', async () => {
    const res = await axios.get(`${base_url}/phone/all`);
    return res.data?.data ?? res.data;
});

// Initial state
const initialState = {
    email: [],
    address: [],
    phone: [],
    loading: {
        email: false,
        address: false,
        phone: false,
    },
    error: {
        email: null,
        address: null,
        phone: null,
    },
};

const contactdetailsSlice = createSlice({
    name: 'contactdetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Email
            .addCase(fetchEmail.pending, (state) => {
                state.loading.email = true;
                state.error.email = null;
            })
            .addCase(fetchEmail.fulfilled, (state, action) => {
                state.loading.email = false;
                state.email = action.payload;
            })
            .addCase(fetchEmail.rejected, (state, action) => {
                state.loading.email = false;
                state.error.email = action.error.message;
            })

            // Address
            .addCase(fetchAddress.pending, (state) => {
                state.loading.address = true;
                state.error.address = null;
            })
            .addCase(fetchAddress.fulfilled, (state, action) => {
                state.loading.address = false;
                state.address = action.payload;
            })
            .addCase(fetchAddress.rejected, (state, action) => {
                state.loading.address = false;
                state.error.address = action.error.message;
            })

            // Phone
            .addCase(fetchPhone.pending, (state) => {
                state.loading.phone = true;
                state.error.phone = null;
            })
            .addCase(fetchPhone.fulfilled, (state, action) => {
                state.loading.phone = false;
                state.phone = action.payload;
            })
            .addCase(fetchPhone.rejected, (state, action) => {
                state.loading.phone = false;
                state.error.phone = action.error.message;
            });
    },
});

export default contactdetailsSlice.reducer;
