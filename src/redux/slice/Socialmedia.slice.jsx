import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../Baseurl';

// Fetch all Social Media data
export const fetchSocialMedia = createAsyncThunk(
    'socialmedia/fetchSocialMedia',
    async () => {
        const response = await axios.get(`${base_url}/socialmedia/all`);
        return response.data;
    }
);

const initialState = {
    facebook: null,
    instagram: null,
    youtube: null,
    twitter: null,
    loading: false,
    error: null,
};

const socialMediaSlice = createSlice({
    name: 'socialmedia',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSocialMedia.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSocialMedia.fulfilled, (state, action) => {
                state.loading = false;
                const data = action.payload;

                // Assuming the API response is an array of one object with keys
                // like: facebook, instagram, youtube, twitter
                const social = Array.isArray(data) && data.length > 0 ? data[0] : {};
                state.facebook = social.facebook || null;
                state.instagram = social.instagram || null;
                state.youtube = social.youtube || null;
                state.twitter = social.twitter || null;
            })
            .addCase(fetchSocialMedia.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default socialMediaSlice.reducer;
