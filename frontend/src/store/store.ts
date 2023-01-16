import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
import { searchSlice } from "./slices/SearchSlice";
import { chatSlice } from "./slices/ChatSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        search: searchSlice.reducer,
        chat: chatSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
