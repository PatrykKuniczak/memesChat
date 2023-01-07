import React, { ChangeEvent, useState } from "react";

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
    const [userName, setUserName] = useState("John Doe");
    const [newUserName, setNewUserName] = useState(userName);
    const [showAvatarDropdown, setShowAvatarDropdown] = useState(false);
    const [showEditNicknameModal, setShowEditNicknameModal] = useState(false);
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

    const toggleAvatarDropdown = () => {
        setShowAvatarDropdown((prevState) => !prevState);
        setShowEditNicknameModal(false);
        setShowDeleteAccountModal(false);
    };
    const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNewUserName(value);
    };

    return (
        <AvatarWrapper>
            {showEditNicknameModal && (
                <>
                    <EditNicknameModal>
                        <span>Twój nowy nick:</span>
                        <Input
                            type="text"
                            value={newUserName}
                            onChange={(e) => handleNicknameChange(e)}
                        />
                        <Input
                            type="submit"
                            value="Zapisz"
                            onClick={() => {
                                setUserName(newUserName);
                                setShowEditNicknameModal(false);
                                setShowAvatarDropdown(false);
                            }}
                        />
                    </EditNicknameModal>
                    <ModalBackgroundHandler
                        onClick={() => {
                            setShowEditNicknameModal(false);
                            setShowAvatarDropdown(false);
                        }}
                    />
                </>
            )}
            {showDeleteAccountModal && (
                <>
                    <DeleteAccountModal>
                        <>
                            <span>Czy na pewno chcesz usunąć konto?</span>
                            <DeleteAccountModalButtons>
                                <ButtonPrimary
                                    onClick={() => {
                                        setShowDeleteAccountModal(false);
                                        setShowAvatarDropdown(false);
                                    }}
                                >
                                    Tak, usuwam konto
                                </ButtonPrimary>
                                <ButtonSecondary
                                    onClick={() => {
                                        setShowDeleteAccountModal(false);
                                        setShowAvatarDropdown(false);
                                    }}
                                >
                                    Anuluj
                                </ButtonSecondary>
                            </DeleteAccountModalButtons>
                        </>
                    </DeleteAccountModal>
                    <ModalBackgroundHandler
                        onClick={() => {
                            setShowDeleteAccountModal(false);
                            setShowAvatarDropdown(false);
                        }}
                    />
                </>
            )}
            <UserName>{userName}</UserName>
            <UserImage src={user} onClick={toggleAvatarDropdown} />
            <div>
                <Button onClick={toggleAvatarDropdown}>
                    <ChevronIcon />
                </Button>
                {showAvatarDropdown && (
                    <DropdownWrapper
                        onClick={() => {
                            setShowAvatarDropdown(false);
                        }}
                    >
                        <>
                            <DropdownList>
                                <DropdownListItem
                                    onClick={() => {
                                        setShowEditNicknameModal(true);
                                        setShowDeleteAccountModal(false);
                                    }}
                                >
                                    Edytuj konto
                                </DropdownListItem>
                                <DropdownListItem
                                    onClick={() => {
                                        setShowDeleteAccountModal(true);
                                        setShowEditNicknameModal(false);
                                    }}
                                >
                                    Usuń konto
                                </DropdownListItem>
                            </DropdownList>
                            <ModalBackgroundHandler
                                onClick={() => {
                                    setShowAvatarDropdown(false);
                                }}
                            />
                        </>
                    </DropdownWrapper>
                )}
            </div>
        </AvatarWrapper>
    );
};

export default Avatar;
