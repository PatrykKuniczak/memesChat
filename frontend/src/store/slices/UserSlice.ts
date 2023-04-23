import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface User {
    id: number;
    avatarId: number | null;
    username: string;
    loading: boolean;
    error: string | undefined;
}

const initialState: User = {
    id: 0,
    avatarId: null,
    username: "",
    loading: false,
    error: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            state.username = action.payload;
        },
        removeAvatar: state => {
            state.avatarId = null;
        },
        updateProfile: (state, action) => {
            state.avatarId = action.payload.avatarId;
        }
    }
});

export const { editUsername, removeAvatar, updateProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
