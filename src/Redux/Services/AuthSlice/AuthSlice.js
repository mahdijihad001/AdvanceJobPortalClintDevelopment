import { createSlice } from "@reduxjs/toolkit";

const getUserFormLocalStorage = () =>{
    const getUser = localStorage.getItem("user");
    try {
        if(getUser === null){
            return {user : null};
        }
        return {user : JSON.parse(getUser)};
    } catch (error) {
        return {user : null}
    }
}

const initialState = getUserFormLocalStorage();

export const AuthSlice = createSlice({
    name : "AuthSlice",
    initialState,
    reducers : {
        logInUser : (state , action) =>{
            state.user = action.payload.user;
            localStorage.setItem("user" , JSON.stringify(state.user));
        },
        logOutUser : (state) =>{
            state.user = null;
            localStorage.removeItem("user")
        }
    }
});



export const {logInUser , logOutUser} = AuthSlice.actions;
export default AuthSlice.reducer