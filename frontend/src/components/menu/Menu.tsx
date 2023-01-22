import React from "react";
import { useMenu } from "./useMenu";
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
import Modals from "../modals/Modals";

const Menu = () => {
    const { username, showMenu, changeMenuVisible } = useMenu();

    return (
        <>
            <MenuWrapper>
                <MenuUserName>{username}</MenuUserName>
                <MenuUserImage src={user} onClick={changeMenuVisible} />
                <>
                    <DropdownButton onClick={changeMenuVisible}>
                        <ChevronIcon />
                    </DropdownButton>
                    <BurgerButton onClick={changeMenuVisible}>
                        <BurgerIcon />
                    </BurgerButton>
                </>
            </MenuWrapper>

            <Modals showMenu={showMenu} changeMenuVisible={changeMenuVisible} />
        </>
    );
};

export default Menu;
