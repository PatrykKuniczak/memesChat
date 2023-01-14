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
    ModalBackgroundHandlerClear,
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
        handleNicknameEnter,
        updateUsername,
        toggleAvatarDropdown,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = useMenuFunc();

    return (
        <>
            <MenuWrapper>
                {menuStatus === "account-edit-modal-visible" && (
                    <>
                        <EditNameModal>
                            <span>Twój nowy nick:</span>
                            <TextInput
                                type="text"
                                value={newUsername}
                                onChange={handleNicknameChange}
                                onKeyDown={handleNicknameEnter}
                            />
                            <SubmitButton
                                type="submit"
                                value="Zapisz"
                                onClick={updateUsername}
                            />
                        </EditNameModal>
                        <ModalBackgroundHandler
                            onClick={toggleAvatarDropdown}
                        />
                    </>
                )}
                {menuStatus === "account-delete-modal-visible" && (
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
                        <ModalBackgroundHandler
                            onClick={toggleAvatarDropdown}
                        />
                    </>
                )}
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
            {menuStatus === "dropdown-visible" && (
                <DropdownWrapper>
                    <DropdownList>
                        <DropdownListItem onClick={toggleAccountEditModal}>
                            Edytuj konto
                        </DropdownListItem>
                        <DropdownListItem onClick={toggleAccountDeleteModal}>
                            Usuń konto
                        </DropdownListItem>
                        <ModalBackgroundHandlerClear
                            onClick={toggleAvatarDropdown}
                        />
                    </DropdownList>
                    <ModalBackgroundHandlerClear
                        onClick={toggleAvatarDropdown}
                    />
                </DropdownWrapper>
            )}
        </>
    );
};

export default Menu;
