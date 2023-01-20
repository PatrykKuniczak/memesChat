import {
    MenuBackgroundHandler,
    ModalBackgroundHandlerClear
} from "./Menu.styled";

import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./ModalDropdown.styled";

const ModalDropdown = (props: any) => {
    const { toggleAccountDeleteModal, toggleAccountEditModal, hideModals } =
        props;

    return (
        <DropdownWrapper>
            <DropdownList>
                <DropdownListItem onClick={toggleAccountEditModal}>
                    Edytuj konto
                </DropdownListItem>
                <DropdownListItem onClick={toggleAccountDeleteModal}>
                    Usuń konto
                </DropdownListItem>
                <MenuBackgroundHandler onClick={hideModals} />
            </DropdownList>
            <ModalBackgroundHandlerClear onClick={hideModals} />
        </DropdownWrapper>
    );
};

export default ModalDropdown;
