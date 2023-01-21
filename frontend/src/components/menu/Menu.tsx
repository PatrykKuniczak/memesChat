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
        hideModals,
        toggleDropdown,
        showAccountEditModal,
        showAccountDeleteModal
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
                hideModals={hideModals}
                showAccountEditModal={showAccountEditModal}
                showAccountDeleteModal={showAccountDeleteModal}
            />
        </>
    );
};

export default Menu;
