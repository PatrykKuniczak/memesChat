import {
    MenuWrapper,
    DropdownButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton,
    MenuProfileWrapper
} from "./Menu.styled";
import { useMenu } from "./useMenu";
import Modals from "../modals/Modals";

const Menu = () => {
    const { showMenu, changeMenuVisible, menuProfileContentDisplay } =
        useMenu();

    return (
        <>
            <MenuWrapper>
                <MenuProfileWrapper>
                    {menuProfileContentDisplay()}
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
