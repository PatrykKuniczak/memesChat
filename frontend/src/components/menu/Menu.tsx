import React from "react";
import { useMenuFunc } from "./useMenuFunc";
import Modals from "./ModalsWrapper";

import {
    MenuWrapper,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton
} from "./Menu.styled";

import user from "assets/user.jpg";

const Menu = () => {
    const {
        currentModal,
        username,
        toggleDropdown,
        newUsername,
        hideModals,
        updateUsername,
        handleNicknameChange,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = useMenuFunc();

    return (
        <>
            <MenuWrapper>
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

            <Modals
                currentModal={currentModal}
                toggleAccountEditModal={toggleAccountEditModal}
                toggleAccountDeleteModal={toggleAccountDeleteModal}
                hideModals={hideModals}
                newUsername={newUsername}
                handleNicknameChange={handleNicknameChange}
                updateUsername={updateUsername}
                deleteAccountConfirm={deleteAccountConfirm}
                deleteAccountCancel={deleteAccountCancel}
            />
        </>
    );
};

export default Menu;