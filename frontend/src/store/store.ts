import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/MenuSlice";
import { userSlice } from "./slices/UserSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        user: userSlice.reducer
    }
});
