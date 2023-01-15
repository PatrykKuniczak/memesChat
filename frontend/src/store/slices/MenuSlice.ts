import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface Menu {
    dropdownVisible: boolean;
    accountEditModalVisible: boolean;
    accountDeleteModalVisible: boolean;
}

const initialState: Menu = {
    dropdownVisible: false,
    accountEditModalVisible: false,
    accountDeleteModalVisible: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleDropdownVisibility: (state) => {
            state.dropdownVisible = !state.dropdownVisible;
        },
        toggleAccountEditModalVisibility: (state) => {
            state.accountEditModalVisible = !state.accountEditModalVisible;
            state.dropdownVisible = false;
        },
        toggleAccountDeleteModalVisibility: (state) => {
            state.accountDeleteModalVisible = !state.accountDeleteModalVisible;
            state.dropdownVisible = false;
        },
        hideAllModals: (state: any) => {
            Object.keys(state).forEach((i) => state[i] = false);
        }
    }
});

export const {
    toggleDropdownVisibility,
    toggleAccountEditModalVisibility,
    toggleAccountDeleteModalVisibility,
    hideAllModals
} = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
