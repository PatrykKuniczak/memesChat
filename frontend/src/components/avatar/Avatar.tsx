import React from "react";
import { useAvatarFunc } from "./useAvatarFunc";

import {
    AvatarWrapper,
    Button,
    DropdownWrapper,
    DropdownList,
    DropdownListItem,
    EditNicknameModal,
    Input,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    ModalBackgroundHandler
} from "./Avatar.styled";

import { UserImage, UserName } from "../../pages/home/Home.styled";

import user from "../../assets/user.jpg";


const Avatar = () => {
    const userInput = ''
    const {
        userName,
        newUserName,
        avatarWidgetStatus,
        handleNicknameChange,
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        updateUserName,
        deleteAccountConfirm,
        deleteAccountCancel,
    }  = useAvatarFunc(userInput);

    return (
        <AvatarWrapper>
            {avatarWidgetStatus === "account-edit-modal-visible" && (
                <>
                    <EditNicknameModal>
                        <span>Twój nowy nick:</span>
                        <Input
                            type="text"
                            value={newUserName}
                            onChange={(event) => handleNicknameChange(event)}
                        />
                        <Input
                            type="submit"
                            value="Zapisz"
                            onClick={updateUserName}
                        />
                    </EditNicknameModal>
                    <ModalBackgroundHandler onClick={toggleAvatarDropdown} />
                </>
            )}
            {avatarWidgetStatus === "account-delete-modal-visible" && (
                <>
                    <DeleteAccountModal>
                        <>
                            <span>Czy na pewno chcesz usunąć konto?</span>
                            <DeleteAccountModalButtons>
                                <ButtonPrimary onClick={deleteAccountConfirm}>
                                    Tak, usuwam konto
                                </ButtonPrimary>
                                <ButtonSecondary onClick={deleteAccountCancel}>
                                    Anuluj
                                </ButtonSecondary>
                            </DeleteAccountModalButtons>
                        </>
                    </DeleteAccountModal>
                    <ModalBackgroundHandler onClick={toggleAvatarDropdown} />
                </>
            )}
            <UserName>{userName}</UserName>
            <UserImage src={user} onClick={toggleAvatarDropdown} />
            <div>
                <Button onClick={toggleAvatarDropdown}>
                    <ChevronIcon />
                </Button>
                {avatarWidgetStatus === "dropdown-visible" && (
                    <DropdownWrapper>
                        <>
                            <DropdownList>
                                <DropdownListItem
                                    onClick={toggleAccountEditModal}
                                >
                                    Edytuj konto
                                </DropdownListItem>
                                <DropdownListItem
                                    onClick={toggleAccountDeleteModal}
                                >
                                    Usuń konto
                                </DropdownListItem>
                            </DropdownList>
                            <ModalBackgroundHandler
                                onClick={toggleAvatarDropdown}
                            />
                        </>
                    </DropdownWrapper>
                )}
            </div>
        </AvatarWrapper>
    );
};

export default Avatar;
