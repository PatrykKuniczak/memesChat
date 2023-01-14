import { createSlice } from "@reduxjs/toolkit";

export interface User {
    username: string;
    newUsername: string;
}

const initialState: User = {
    username: "John Doe",
    newUsername: "John Doe"
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        editUsername: (state, action) => {
            state.newUsername = action.payload;
        },
        saveNewUsername: (state) => {
          state.username = state.newUsername;
      }
    }
});

export const { editUsername, saveNewUsername } = userSlice.actions;

export default userSlice.reducer;
