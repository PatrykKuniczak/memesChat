import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface User {
    username: string;
}

const initialState: User = {
    username: "Dohn Joe"
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            console.log(state.username);
            state.username = action.payload;
        }
    }
});

export const { editUsername } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
