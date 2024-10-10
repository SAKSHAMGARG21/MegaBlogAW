// import {configureStore} from "@reduxjs/toolkit";
// import userReducer from "../store/authSilce";
// const store = configureStore({
//     reducer:userReducer
// })

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSilce.js';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;