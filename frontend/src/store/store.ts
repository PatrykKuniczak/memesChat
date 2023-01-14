import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/MenuSlice";
import { userSlice } from "./slices/UserSlice";
import { counterSlice } from "./slices/CounterSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        user: userSlice.reducer
        // counter: counterSlice.reducer
    }
});
