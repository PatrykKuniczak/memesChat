import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useState, ChangeEvent } from "react";
import { editUsername } from "store/slices/UserSlice";
import { fetchUser } from "store/slices/UserSlice";

export const useMenu = () => {
    const dispatch = useAppDispatch();

    const [currentModal, setCurrentModal] = useState(0);

    const username = useAppSelector((state) => state.user.username);

    const fetchUsernameAsyncThunk = () => {
        dispatch(fetchUser())
    }

    const [newUsername, setNewUsername] = useState(
        useAppSelector((state) => state.user.username)
    );

    //modal display controls

    const hideModals = () => {
        setCurrentModal(0);
    };

    const toggleDropdown = () => {
        currentModal !== 1 ? setCurrentModal(1) : setCurrentModal(0);
    };

    const toggleAccountEditModal = () => {
        setCurrentModal(2);
    };

    const toggleAccountDeleteModal = () => {
        setCurrentModal(3);
    };

    // nickname change modal

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewUsername(event.target.value);
    };

    const updateUsername = () => {
        dispatch(editUsername(newUsername));
        hideModals();
    };

    // account delete modal

    const deleteAccountConfirm = () => {
        // todo: miejsce na twoja logike
        hideModals();
    };

    const deleteAccountCancel = () => {
        // todo: miejsce na twoja logike
        hideModals();
    };

    return {
        currentModal,
        username,
        fetchUsernameAsyncThunk,
        newUsername,
        hideModals,
        toggleDropdown,
        updateUsername,
        handleNicknameChange,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    };
};