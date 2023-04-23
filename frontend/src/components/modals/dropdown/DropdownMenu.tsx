import useLogout from "hooks/useLogout";
import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./DropdownMenu.styled";
import useDropdownMenu from "./useDropdownMenu";

type IDropdownMenu = {
    showModal: (modalName: string) => void;
    changeMenuVisible: () => void;
};

const DropdownMenu = ({ showModal, changeMenuVisible }: IDropdownMenu) => {
    const { ref, menuProfileHandler } = useDropdownMenu(changeMenuVisible);
    const { logoutUser } = useLogout();

    return (
        <DropdownWrapper>
            <DropdownList ref={ref}>
                {menuProfileHandler()}
                <DropdownListItem onClick={() => showModal("edit")}>
                    Edytuj konto
                </DropdownListItem>

                <DropdownListItem onClick={() => showModal("deleteAvatar")}>
                    Usuń Avatar
                </DropdownListItem>

                <DropdownListItem onClick={() => showModal("deleteAccount")}>
                    Usuń konto
                </DropdownListItem>

                <DropdownListItem onClick={logoutUser}>
                    Wyloguj się
                </DropdownListItem>
            </DropdownList>
        </DropdownWrapper>
    );
};

export default DropdownMenu;
