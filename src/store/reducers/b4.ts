import { createSlice } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
       mode:"list",
    },
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "list" ? "grid" : "list";
        }
    }
})
export const { toggleMode } = displaySlice.actions;

export default displaySlice.reducer;