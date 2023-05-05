import { createSlice } from "@reduxjs/toolkit";

export const userslice = createSlice({
    name : 'user',
    initialState : {
        user : null
    },
    reducers: {
        login : (state , action) =>{
            state.user = action.payload;
        },
        logout : (state , action) =>{
            state.user =null;
        }
    }

})
export const  { login ,logout} = userslice.actions;
export const userReducer = userslice.reducer; 