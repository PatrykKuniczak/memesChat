import React, { useEffect } from "react";
import { useMenu } from "./useMenu";
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
        fetchUsernameAsyncThunk,
        newUsername,
        toggleDropdown,
        hideModals,
        updateUsername,
        handleNicknameChange,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = useMenu();

    useEffect(() => {
        fetchUsernameAsyncThunk();
    }, []);

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
