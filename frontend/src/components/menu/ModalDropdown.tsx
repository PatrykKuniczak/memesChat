import {
    MenuBackgroundHandler,
    ModalBackgroundHandlerClear
} from "./Menu.styled";

import {
    DropdownWrapper,
    DropdownList,
    DropdownListItem
} from "./ModalDropdown.styled";

interface ModalDropdownProps {
    showAccountDeleteModal: () => void;
    showAccountEditModal: () => void;
    hideModals: () => void;
}

const ModalDropdown = (props: ModalDropdownProps) => {
    const { showAccountDeleteModal, showAccountEditModal, hideModals } = props;

    return (
        <DropdownWrapper>
            <DropdownList>
                <DropdownListItem onClick={showAccountEditModal}>
                    Edytuj konto
                </DropdownListItem>
                <DropdownListItem onClick={showAccountDeleteModal}>
                    Usuń konto
                </DropdownListItem>
                <MenuBackgroundHandler onClick={hideModals} />
            </DropdownList>
            <ModalBackgroundHandlerClear onClick={hideModals} />
        </DropdownWrapper>
    );
};

export default ModalDropdown;
