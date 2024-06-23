import { createSlice } from "@reduxjs/toolkit";

// khởi tạo state 
const countState :number=0;

const countReducer =createSlice({
    name:"countReducer",
    initialState:countState,
    reducers:{
        increase:(state:any)=>state+=1,
        decrease:(state:any)=>state-=1,
        reset:(state:any)=>state=0,
    }
})

export const {increase,decrease,reset} = countReducer.actions;

export default countReducer.reducer;