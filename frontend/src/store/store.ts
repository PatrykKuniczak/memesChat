import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./slices/MenuSlice";
import { userSlice } from "./slices/UserSlice";
import { searchSlice } from "./slices/SearchSlice";
import { chatSlice } from "./slices/ChatSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        user: userSlice.reducer,
        search: searchSlice.reducer,
        chat: chatSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
