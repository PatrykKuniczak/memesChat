import { useAppDispatch, useAppSelector } from "store/store";
import { useState } from "react";
import { fetchUser } from "store/slices/UserSlice";

export const useMenu = () => {
    const dispatch = useAppDispatch();

    const username = useAppSelector((state) => state.user.username);

    const [currentModal, setCurrentModal] = useState("modal-none");

    const fetchUsernameAsyncThunk = () => {
        dispatch(fetchUser());
    };

    const hideModals = () => {
        setCurrentModal("modal-none");
    };

    const toggleDropdown = () => {
        currentModal !== "modal-dropdown"
            ? setCurrentModal("modal-dropdown")
            : setCurrentModal("modal-none");
    };

    const showAccountEditModal = () => {
        setCurrentModal("modal-edit");
    };

    const showAccountDeleteModal = () => {
        setCurrentModal("modal-delete");
    };

    return {
        currentModal,
        username,
        fetchUsernameAsyncThunk,
        hideModals,
        toggleDropdown,
        showAccountEditModal,
        showAccountDeleteModal
    };
};
