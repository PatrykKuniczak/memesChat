import React, { ChangeEvent, useState } from "react";

export const useAvatarFunc = (userInput: string) => {
    const [userName, setUserName] = useState<string>("John Doe");
    const [newUserName, setNewUserName] = useState(userName);
    const [avatarWidgetStatus, setAvatarWidgetStatus] =
        useState("dropdown-hidden");

    function handleNicknameChange(userInput: ChangeEvent<HTMLInputElement>) {
        const value = userInput.target.value;
        setNewUserName(value);
    }

    function toggleAvatarDropdown() {
        if (avatarWidgetStatus === "dropdown-hidden") {
            setAvatarWidgetStatus("dropdown-visible");
        } else setAvatarWidgetStatus("dropdown-hidden");
    }

    function toggleAccountEditModal() {
        setAvatarWidgetStatus("account-edit-modal-visible");
    }

    function toggleAccountDeleteModal() {
        setAvatarWidgetStatus("account-delete-modal-visible");
    }

    function updateUserName() {
        setUserName(newUserName);
        setAvatarWidgetStatus("dropdown-hidden");
    }

    function deleteAccountConfirm() {
        toggleAvatarDropdown();
    }

    function deleteAccountCancel() {
        toggleAvatarDropdown();
    }

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
