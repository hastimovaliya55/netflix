import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";
import searchSlice from "./Serchslice";

const store = configureStore({
    reducer:{
        app:userReducer,
        movie:movieReducer,
        searchMovie:searchSlice
        
    }
});
export default store;