import { useSelector, useDispatch } from "react-redux";
import { ChangeEvent } from "react";

import { toggleMenuStatus } from "store/slices/MenuSlice";
import { editUsername, saveNewUsername } from "store/slices/UserSlice";

export const useMenuFunc = () => {
    const menuStatus = useSelector((store: any) => store.menu.menuStatus);
    const username = useSelector((store: any) => store.user.username);
    const newUsername = useSelector((store: any) => store.user.newUsername);

    const dispatch = useDispatch();

    const toggleAvatarDropdown = () => {
        dispatch(toggleMenuStatus("toggle-dropdown"));
    };

    const toggleAccountEditModal = () => {
        dispatch(toggleMenuStatus("account-edit-modal-visible"));
    };

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(editUsername(event.target.value));
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
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    };
};
