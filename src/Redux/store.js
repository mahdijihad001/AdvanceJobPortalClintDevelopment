import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Services/AuthSlice/AuthSlice"
import AuthApi from "./Services/AuthApi/AuthApi";


const store = configureStore({
    reducer : {
        Auth : AuthReducer
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(AuthApi.middleware);
    }
});


export default store;