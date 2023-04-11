import {
    MenuWrapper,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton,
    MenuProfileWrapper
} from "./Menu.styled";
import { useMenu } from "./useMenu";
import Modals from "../modals/Modals";
import user from "assets/user.jpg";

const Menu = () => {
    const { username, showMenu, changeMenuVisible, avatar } = useMenu();

    return (
        <>
            <MenuWrapper>
                <MenuProfileWrapper>
                    <MenuUserName>{username}</MenuUserName>
                    <MenuUserImage
                        src={avatar || user}
                        onClick={changeMenuVisible}
                    />
                    <DropdownButton onClick={changeMenuVisible}>
                        <ChevronIcon />
                    </DropdownButton>
                </MenuProfileWrapper>
                <BurgerButton onClick={changeMenuVisible}>
                    <BurgerIcon />
                </BurgerButton>
            </MenuWrapper>

            <Modals
                showMenu={showMenu}
                changeMenuVisible={changeMenuVisible}
            />
        </>
    );
};

export default Menu;
