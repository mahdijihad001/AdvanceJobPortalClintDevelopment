import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Services/AuthSlice/AuthSlice"
import AuthApi from "./Services/AuthApi/AuthApi";
import profileApi from "./Services/ProfileApi/ProfileApi";
import JobApi from "./Services/Job/JobApi";


const store = configureStore({
    reducer : {
        Auth : AuthReducer,
        [AuthApi.reducerPath] : AuthApi.reducer,
        [profileApi.reducerPath] : profileApi.reducer,
        [JobApi.reducerPath] : JobApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(AuthApi.middleware , profileApi.middleware , JobApi.middleware);
    }
});


export default store;