import { ChangeEvent, useState } from "react";

export const useAvatarFunc = (
    userInput: ChangeEvent<HTMLInputElement> | string = ""
) => {
    const [userName, setUserName] = useState("John Doe");
    const [newUserName, setNewUserName] = useState(userName);
    const [avatarWidgetStatus, setAvatarWidgetStatus] = useState<
        | "dropdown-hidden"
        | "dropdown-visible"
        | "account-edit-modal-visible"
        | "account-delete-modal-visible"
    >("dropdown-hidden");

    function handleNicknameChange(userInput: ChangeEvent<HTMLInputElement>) {
        const value = userInput.target.value;
        setNewUserName(value);
    }

    function toggleAvatarDropdown() {
        avatarWidgetStatus === "dropdown-hidden"
            ? setAvatarWidgetStatus("dropdown-visible")
            : setAvatarWidgetStatus("dropdown-hidden");
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
        userInput,
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
