import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/MenuSlice";
import { userSlice } from "./slices/UserSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        user: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
