import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface User {
    username: any;
    loading: boolean;
    error: string | undefined;
}

const initialState: User = {
    username: "",
    loading: false,
    error: ""
};

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (thunkAPI) => {
        const getRandomArbitrary = (min: number, max: number) => {
            return Math.ceil(Math.random() * (max - min) + min);
        };
        const response = await fetch(
            `https://dummyjson.com/users/${getRandomArbitrary(30, 1)}`,
            {
                method: "GET"
            }
        );
        return response.json();
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.username = action.payload.firstName;
            state.error = "";
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.username = "error";
            state.error = action.error.message;
        });
    }
});

export const { editUsername } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
