import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./DropdownMenu.styled";
import React from "react";
import useDropdownMenu from "./useDropdownMenu";

type IDropdownMenu = { showModal: (modalName: string) => void, changeMenuVisible: () => void }
const DropdownMenu = ({ showModal, changeMenuVisible }: IDropdownMenu) => {
    const { ref } = useDropdownMenu(changeMenuVisible);

    return (
        <>
            <DropdownWrapper>
                <DropdownList ref={ref}>
                    <DropdownListItem onClick={() => showModal("edit")}>
                        Edytuj konto
                    </DropdownListItem>
                    <DropdownListItem onClick={() => showModal("delete")}>
                        Usuń konto
                    </DropdownListItem>
                </DropdownList>
            </DropdownWrapper>
        </>
    );
};

export default DropdownMenu;
