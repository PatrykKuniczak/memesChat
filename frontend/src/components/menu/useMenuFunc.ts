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

    function handleNicknameChange(event: ChangeEvent<HTMLInputElement>) {
        setNewUserName(event.target.value);
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
        // todo: miejsce na twoja logike
        toggleAvatarDropdown();
    }

    function deleteAccountCancel() {
        // todo: miejsce na twoja logike
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
