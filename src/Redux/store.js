import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Services/AuthSlice/AuthSlice"
import AuthApi from "./Services/AuthApi/AuthApi";
import profileApi from "./Services/ProfileApi/ProfileApi";
import JobApi from "./Services/Job/JobApi";
import CompanyApi from "./Services/Job/CompanyApi";


const store = configureStore({
    reducer : {
        Auth : AuthReducer,
        [AuthApi.reducerPath] : AuthApi.reducer,
        [profileApi.reducerPath] : profileApi.reducer,
        [JobApi.reducerPath] : JobApi.reducer,
        [CompanyApi.reducerPath] : CompanyApi.reducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(AuthApi.middleware , profileApi.middleware , JobApi.middleware , CompanyApi.middleware);
    }
});


export default store;