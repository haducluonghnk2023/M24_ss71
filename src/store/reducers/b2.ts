import { createSlice } from "@reduxjs/toolkit";

// khởi tạo state 
const countState :number[]=[];

const countReducer =createSlice({
    name:"addNumber",
    initialState:countState,
    reducers:{
        randomNumber:(state)=>{
            state.push(Math.floor(Math.random() * 100));
        }
    }
})

export const {randomNumber} = countReducer.actions;

export default countReducer.reducer;