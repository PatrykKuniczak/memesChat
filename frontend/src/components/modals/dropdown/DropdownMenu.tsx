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
    const { ref } = useDropdownMenu(changeMenuVisible);

    return (
        <>
            <DropdownWrapper>
                <DropdownList ref={ref}>
                    <DropdownListItem onClick={() => showModal("edit")}>
                        Edytuj konto
                    </DropdownListItem>

                    <DropdownListItem
                        onClick={() => showModal("deleteAccount")}
                    >
                        Usuń konto
                    </DropdownListItem>

                    <DropdownListItem onClick={() => showModal("deleteAvatar")}>
                        Usuń Avatar
                    </DropdownListItem>
                </DropdownList>
            </DropdownWrapper>
        </>
    );
};

export default DropdownMenu;
