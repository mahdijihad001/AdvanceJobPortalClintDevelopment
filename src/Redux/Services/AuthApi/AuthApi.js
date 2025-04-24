import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BaseUrl from './../../../Utils/BaseUrl/BaseUrl';


export const AuthApi = createApi({
    reducerPath : "AuthApi",
    baseQuery : fetchBaseQuery({
        baseUrl : `${BaseUrl()}/user`,
        credentials : "include"
    }),
    endpoints : (builder) => ({
        registerUser : builder.mutation({
            query : (registerData) =>({
                url : "/register",
                method : "POST",
                body : JSON.stringify(registerData)
            })
        }),
        logInUser : builder.mutation({
            query : (loginData) => ({
                url : "/login",
                method : "POST",
                body : JSON.stringify(loginData)
            })
        })
    })
});


export const {useRegisterUserMutation , useLogInUserMutation} = AuthApi;

export default AuthApi

