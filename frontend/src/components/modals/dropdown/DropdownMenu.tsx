import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./DropdownMenu.styled";
import useDropdownMenu from "./useDropdownMenu";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

type IDropdownMenu = {
    showModal: (modalName: string) => void;
    changeMenuVisible: () => void;
};

const DropdownMenu = ({ showModal, changeMenuVisible }: IDropdownMenu) => {
    const { ref } = useDropdownMenu(changeMenuVisible);
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const handleLogout = () => {
        setAccessToken("");
        navigate("auth/signIn");
    };

    return (
        <>
            <DropdownWrapper>
                <DropdownList ref={ref}>
                    <DropdownListItem onClick={() => showModal("edit")}>
                        Edytuj konto
                    </DropdownListItem>

                    <DropdownListItem onClick={() => showModal("deleteAvatar")}>
                        Usuń Avatar
                    </DropdownListItem>

                    <DropdownListItem
                        onClick={() => showModal("deleteAccount")}>
                        Usuń konto
                    </DropdownListItem>

                    <DropdownListItem onClick={handleLogout}>
                        Wyloguj się
                    </DropdownListItem>
                </DropdownList>
            </DropdownWrapper>
        </>
    );
};

export default DropdownMenu;
