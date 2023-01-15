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
        dropdownVisible,
        accountEditModalVisible,
        accountDeleteModalVisible,
        username,
        newUsername,
        handleNicknameChange,
        handleNicknameEnter,
        updateUsername,
        toggleDropdown,
        hideModals,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = useMenuFunc();

    return (
        <>
            <MenuWrapper>
                {accountEditModalVisible === true && (
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
                        <ModalBackgroundHandler onClick={hideModals} />
                    </>
                )}

                {accountDeleteModalVisible === true && (
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
                        <ModalBackgroundHandler onClick={hideModals} />
                    </>
                )}
                <MenuUserName>{username}</MenuUserName>
                <MenuUserImage src={user} onClick={toggleDropdown} />
                <>
                    <DropdownButton onClick={toggleDropdown}>
                        <ChevronIcon />
                    </DropdownButton>
                    <BurgerButton onClick={toggleDropdown}>
                        <BurgerIcon />
                    </BurgerButton>
                </>
            </MenuWrapper>

            {dropdownVisible === true && (
                <DropdownWrapper>
                    <DropdownList>
                        <DropdownListItem onClick={toggleAccountEditModal}>
                            Edytuj konto
                        </DropdownListItem>
                        <DropdownListItem onClick={toggleAccountDeleteModal}>
                            Usuń konto
                        </DropdownListItem>
                        <ModalBackgroundHandlerClear onClick={hideModals} />
                    </DropdownList>
                    <ModalBackgroundHandlerClear onClick={hideModals} />
                </DropdownWrapper>
            )}
        </>
    );
};

export default Menu;
