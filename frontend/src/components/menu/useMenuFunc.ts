import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { ChangeEvent, KeyboardEvent } from "react";

import { toggleMenuStatus } from "store/slices/MenuSlice";
import { editUsername, saveNewUsername } from "store/slices/UserSlice";

export const useMenuFunc = () => {
    const menuStatus = useAppSelector((store) => store.menu.menuStatus);
    const username = useAppSelector((store) => store.user.username);
    const newUsername = useAppSelector((store) => store.user.newUsername);

    const dispatch = useAppDispatch();

    const toggleAvatarDropdown = () => {
        dispatch(toggleMenuStatus("toggle-dropdown"));
    };

    const toggleAccountEditModal = () => {
        dispatch(toggleMenuStatus("account-edit-modal-visible"));
    };

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(editUsername(event.target.value));
    };

    const handleNicknameEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            updateUsername();
        }
    };

    const updateUsername = () => {
        dispatch(saveNewUsername());
        dispatch(toggleMenuStatus("toggle-dropdown"));
    };

    const toggleAccountDeleteModal = () => {
        dispatch(toggleMenuStatus("account-delete-modal-visible"));
    };

    const deleteAccountConfirm = () => {
        // todo: miejsce na twoja logike
        toggleAvatarDropdown();
    };

    const deleteAccountCancel = () => {
        // todo: miejsce na twoja logike
        toggleAvatarDropdown();
    };

    return {
        menuStatus,
        toggleMenuStatus,
        username,
        newUsername,
        updateUsername,
        handleNicknameChange,
        handleNicknameEnter,
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    };
};
