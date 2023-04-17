import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./DropdownMenu.styled";
import useDropdownMenu from "./useDropdownMenu";
import {
    MenuProfileWrapperMobile,
    MenuUserImage,
    MenuUserName
} from "../../menu/Menu.styled";
import user from "assets/user.jpg";

type IDropdownMenu = {
    showModal: (modalName: string) => void;
    changeMenuVisible: () => void;
};

const DropdownMenu = ({ showModal, changeMenuVisible }: IDropdownMenu) => {
    const { ref, handleLogout, username } = useDropdownMenu(changeMenuVisible);

    return (
        <DropdownWrapper>
            <DropdownList ref={ref}>
                <MenuProfileWrapperMobile>
                    <MenuUserName>{username}</MenuUserName>
                    <MenuUserImage
                        src={user}
                        onClick={changeMenuVisible}
                    />
                </MenuProfileWrapperMobile>

                <DropdownListItem onClick={() => showModal("edit")}>
                    Edytuj konto
                </DropdownListItem>

                <DropdownListItem onClick={() => showModal("deleteAvatar")}>
                    Usuń Avatar
                </DropdownListItem>

                <DropdownListItem onClick={() => showModal("deleteAccount")}>
                    Usuń konto
                </DropdownListItem>

                <DropdownListItem onClick={handleLogout}>
                    Wyloguj się
                </DropdownListItem>
            </DropdownList>
        </DropdownWrapper>
    );
};

export default DropdownMenu;
