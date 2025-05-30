import { configureStore } from '@reduxjs/toolkit';
import contactdetailsReducer from './slice/Conatctdetailsslice';
import contactFormReducer from '../redux/slice/ContactformSlice';
import galleryReducer from './slice/Gallery.slice';
import programReducer from "./slice/Program.Slice"
import ourteamReducer from "./slice/Ourteam.slice"
import testimonialReducer from "./slice/Testimonials.slice"
import socialmedialinksReducer from "./slice/Socialmedia.slice"
const store = configureStore({
    reducer: {
        contactdetails: contactdetailsReducer,
        contactform: contactFormReducer,
        gallery: galleryReducer,
        program: programReducer,
        ourteam: ourteamReducer,
        testimonial: testimonialReducer,
        socialmedia : socialmedialinksReducer
    }

});

export default store;
