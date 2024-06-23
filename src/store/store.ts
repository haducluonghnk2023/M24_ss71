import { configureStore } from "@reduxjs/toolkit";
import b1  from "./reducers/b1"
import b2 from "./reducers/b2";
import b3 from "./reducers/b3";
import b4 from "./reducers/b4";
// import b5 from "./reducers/b5";
import b6 from "./reducers/b6";
export const store = configureStore({
    reducer: {
        count:b1,
        listNumber:b2,
        theme:b3,
        display:b4,
        language:b6
        
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;