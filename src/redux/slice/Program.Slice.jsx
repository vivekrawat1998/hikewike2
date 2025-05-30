import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

export const fetchProgram = createAsyncThunk('program/fetchProgram', async () => {
    const res = await axios.get(`${base_url}/programe/all`);
    return res.data
});
export const fetchProgramDetails = createAsyncThunk('program/fetchProgramDetails', async (slug) => {
    const res = await axios.get(`${base_url}/programe/${slug}`);
    return res.data;
});

const initialState = {
    program: [],
    programDetailsCache: {},
    loading: false,
    error: null,
};

const ProgramSlice = createSlice({
    name: 'program',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProgram.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProgram.fulfilled, (state, action) => {
                state.loading = false;
                state.program = action.payload;
            })
            .addCase(fetchProgram.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProgramDetails.fulfilled, (state, action) => {
                state.programDetailsCache[action.payload.slug] = action.payload;
            });
    },
});

export default ProgramSlice.reducer;
