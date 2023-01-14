import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Search {
    searchMode: "user" | "message";
}

const initialState: Search = {
    searchMode: "message"
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        toggleSearchMode: (state) => {
            state.searchMode =
                state.searchMode === "message" ? "user" : "message";
        }
    }
});

export const { toggleSearchMode } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search;

export default searchSlice.reducer;
