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
    EditNameModal,
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
        menuStatus,
        username,
        newUsername,
        handleNicknameChange,
        updateUsername,
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = useMenuFunc();

    const editNameModal = () => (
        <>
            <EditNameModal>
                <span>Twój nowy nick:</span>
                <TextInput
                    type="text"
                    value={newUsername}
                    onChange={(event) => handleNicknameChange(event)}
                    onKeyDown={(event) => {
                        event.key === "Enter" && updateUsername();
                    }}
                />
                <SubmitButton
                    type="submit"
                    value="Zapisz"
                    onClick={updateUsername}
                />
            </EditNameModal>
            <ModalBackgroundHandler onClick={toggleAvatarDropdown} />
        </>
    );

    const deleteAccountModal = () => (
        <>
            <DeleteAccountModal>
                <span>Czy na pewno chcesz usunąć konto?</span>
                <DeleteAccountModalButtons>
                    <ButtonSecondary onClick={deleteAccountConfirm}>
                        Tak, usuwam konto
                    </ButtonSecondary>
                    <ButtonPrimary onClick={deleteAccountCancel}>
                        Anuluj
                    </ButtonPrimary>
                </DeleteAccountModalButtons>
            </DeleteAccountModal>
            <ModalBackgroundHandler onClick={toggleAvatarDropdown} />
        </>
    );

    const menuDropdown = () => (
        <DropdownWrapper>
            <DropdownList>
                <DropdownListItem onClick={toggleAccountEditModal}>
                    Edytuj konto
                </DropdownListItem>
                <DropdownListItem onClick={toggleAccountDeleteModal}>
                    Usuń konto
                </DropdownListItem>
            </DropdownList>
            <ModalBackgroundHandler onClick={toggleAvatarDropdown} />
        </DropdownWrapper>
    );

    return (
        <>
            <MenuWrapper>
                {menuStatus === "account-edit-modal-visible" && editNameModal()}
                {menuStatus === "account-delete-modal-visible" &&
                    deleteAccountModal()}
                <MenuUserName>{username}</MenuUserName>
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
            {menuStatus === "dropdown-visible" && menuDropdown()}
        </>
    );
};

export default Menu;
