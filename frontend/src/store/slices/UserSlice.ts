import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "store/store";
import jwtDecode from "jwt-decode";
import { getUser } from "services/UsersService";

export interface User {
    id: number;
    avatarId: number | null;
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

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (accessToken: string) => {
        const { id, username }: { id: number; username: string } =
            await jwtDecode(accessToken);

        const data = await getUser(id);
        const userAvatar = data.userAvatar ? data.userAvatar.id : 0;

        return { id, username, userAvatar };
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            state.username = action.payload;
        },
        removeAvatar: state => {
            state.avatarId = 0;
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

export const { editUsername, removeAvatar, updateProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
