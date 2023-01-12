import { ChangeEvent, useState } from "react";

export const useMenuFunc = () => {
    const [userName, setUserName] = useState("John Doe");
    const [newUserName, setNewUserName] = useState(userName);
    const [avatarWidgetStatus, setAvatarWidgetStatus] = useState<
        | "dropdown-hidden"
        | "dropdown-visible"
        | "account-edit-modal-visible"
        | "account-delete-modal-visible"
    >("dropdown-hidden");

    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewUserName(event.target.value);
    };

    const toggleAvatarDropdown = () => {
        avatarWidgetStatus === "dropdown-hidden"
            ? setAvatarWidgetStatus("dropdown-visible")
            : setAvatarWidgetStatus("dropdown-hidden");
    };

    const toggleAccountEditModal = () => {
        setAvatarWidgetStatus("account-edit-modal-visible");
    };

    const toggleAccountDeleteModal = () => {
        setAvatarWidgetStatus("account-delete-modal-visible");
    };

    const updateUserName = () => {
        setUserName(newUserName);
        setAvatarWidgetStatus("dropdown-hidden");
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
        userName,
        setUserName,
        newUserName,
        setNewUserName,
        avatarWidgetStatus,
        setAvatarWidgetStatus,
        handleNicknameChange,
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        updateUserName,
        deleteAccountConfirm,
        deleteAccountCancel
    };
};
