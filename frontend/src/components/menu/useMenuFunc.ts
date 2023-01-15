import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { ChangeEvent, KeyboardEvent } from "react";

import {
    toggleDropdownVisibility,
    hideAllModals,
    toggleAccountEditModalVisibility,
    toggleAccountDeleteModalVisibility
} from "store/slices/MenuSlice";
import { editUsername, saveNewUsername } from "store/slices/UserSlice";

export const useMenuFunc = () => {
    // const menuStatus = console.log(useAppSelector((store) => store.menu));
    const dropdownVisible = useAppSelector(
        (store) => store.menu.dropdownVisible
    );
    const accountEditModalVisible = useAppSelector(
        (store) => store.menu.accountEditModalVisible
    );
    const accountDeleteModalVisible = useAppSelector(
        (store) => store.menu.accountDeleteModalVisible
    );
    const username = useAppSelector((store) => store.user.username);
    const newUsername = useAppSelector((store) => store.user.newUsername);

    const dispatch = useAppDispatch();

    const toggleDropdown = () => {
        dispatch(toggleDropdownVisibility());
    };

    const hideModals = () => {
        dispatch(hideAllModals());
    };

    const toggleAccountEditModal = () => {
        dispatch(toggleAccountEditModalVisibility());
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
        dispatch(hideAllModals());
    };

    const toggleAccountDeleteModal = () => {
        dispatch(toggleAccountDeleteModalVisibility());
        // dispatch(toggleMenuStatus("account-delete-modal-visible"));
    };

    const deleteAccountConfirm = () => {
        // todo: miejsce na twoja logike
        dispatch(hideAllModals());
    };

    const deleteAccountCancel = () => {
        // todo: miejsce na twoja logike
        dispatch(hideAllModals());
    };

    return {
        dropdownVisible,
        accountEditModalVisible,
        accountDeleteModalVisible,
        username,
        newUsername,
        updateUsername,
        handleNicknameChange,
        handleNicknameEnter,
        toggleDropdown,
        hideModals,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    };
};
