import React from "react";
import { useMenuFunc } from "./useMenuFunc";

import {
    MenuWrapper,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    DropdownWrapper,
    DropdownList,
    DropdownListItem,
    EditNicknameModal,
    TextInput,
    SubmitButton,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    ModalBackgroundHandler,
    BurgerIcon,
    BurgerButton
} from "./Menu.styled";

import user from "assets/user.jpg";

const Menu = () => {
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
        deleteAccountCancel
    } = useMenuFunc();

    return (
        <>
            <MenuWrapper>
                {avatarWidgetStatus === "account-edit-modal-visible" && (
                    <>
                        <EditNicknameModal>
                            <span>Twój nowy nick:</span>
                            <TextInput
                                type="text"
                                value={newUserName}
                                onChange={(event) =>
                                    handleNicknameChange(event)
                                }
                            />
                            <SubmitButton
                                type="submit"
                                value="Zapisz"
                                onClick={updateUserName}
                            />
                        </EditNicknameModal>
                        <ModalBackgroundHandler
                            onClick={toggleAvatarDropdown}
                        />
                    </>
                )}
                {avatarWidgetStatus === "account-delete-modal-visible" && (
                    <>
                        <DeleteAccountModal>
                            <>
                                <span>Czy na pewno chcesz usunąć konto?</span>
                                <DeleteAccountModalButtons>
                                    <ButtonSecondary
                                        onClick={deleteAccountConfirm}
                                    >
                                        Tak, usuwam konto
                                    </ButtonSecondary>
                                    <ButtonPrimary
                                        onClick={deleteAccountCancel}
                                    >
                                        Anuluj
                                    </ButtonPrimary>
                                </DeleteAccountModalButtons>
                            </>
                        </DeleteAccountModal>
                        <ModalBackgroundHandler
                            onClick={toggleAvatarDropdown}
                        />
                    </>
                )}
                <MenuUserName>{userName}</MenuUserName>
                <MenuUserImage src={user} onClick={toggleAvatarDropdown} />
                <>
                    <DropdownButton onClick={toggleAvatarDropdown}>
                        <ChevronIcon />
                    </DropdownButton>
                    <BurgerButton onClick={toggleAvatarDropdown}>
                        <BurgerIcon />
                    </BurgerButton>
                </>
            </MenuWrapper>
            {avatarWidgetStatus === "dropdown-visible" && (
                <DropdownWrapper>
                    <>
                        <DropdownList>
                            <DropdownListItem onClick={toggleAccountEditModal}>
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
        </>
    );
};

export default Menu;
