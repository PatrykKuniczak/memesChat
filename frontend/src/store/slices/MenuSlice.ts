import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../store/store'

export interface Menu {
    menuStatus: string;
}

const initialState: Menu = {
    menuStatus: "dropdown-hidden"
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenuStatus: (state, action) => {
            switch (action.payload) {
                case "toggle-dropdown":
                    state.menuStatus =
                        state.menuStatus === "dropdown-hidden"
                            ? "dropdown-visible"
                            : "dropdown-hidden";
                    break;
                case "account-edit-modal-visible":
                    state.menuStatus = "account-edit-modal-visible";
                    break;
                case "account-delete-modal-visible":
                    state.menuStatus = "account-delete-modal-visible";
                    break;
                default:
                    console.log(`Sorry, unable to reset ${state.menuStatus}.`);
            }
        }
    }
});

export const { toggleMenuStatus } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu

export default menuSlice.reducer;
