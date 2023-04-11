import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "store/store";
import jwtDecode from "jwt-decode";
import useToken from "../../hooks/useToken";
import axios from "axios";

export interface User {
    id: number;
    avatarId: number;
    username: string;
    loading: boolean;
    error: string | undefined;
}

const initialState: User = {
    id: 0,
    avatarId: 0,
    username: "",
    loading: false,
    error: ""
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const { userToken } = useToken();
    const { id }: { username: string; id: number } = await jwtDecode(userToken);

    const { data } = await axios.get(`users/${id}`);
    const userAvatar = data.userAvatar ? data.userAvatar.id : 0;
    const username = data.username;
    return { id, username, userAvatar };
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            state.username = action.payload;
        },
        updateProfile: (state, action) => {
            state.avatarId = action.payload.avatarId;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                id: action.payload.id,
                username: action.payload.username,
                avatarId: action.payload.userAvatar
            };
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { editUsername, updateProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
