import ModalDropdown from "./ModalDropdown";
import ModalEditName from "./ModalEditName";
import ModalAccountDelete from "./ModalAccountDelete";

import { ModalsWrapper } from "./Menu.styled";

interface ModalsProps {
    currentModal: string;
    hideModals: () => void;
    showAccountEditModal: () => void;
    showAccountDeleteModal: () => void;
}

const Modals = (props: ModalsProps) => {
    const {
        currentModal,
        hideModals,
        showAccountEditModal,
        showAccountDeleteModal
    } = props;

    return (
        <ModalsWrapper>
            {currentModal === "modal-dropdown" && (
                <ModalDropdown
                    showAccountEditModal={showAccountEditModal}
                    showAccountDeleteModal={showAccountDeleteModal}
                    hideModals={hideModals}
                />
            )}

            {currentModal === "modal-edit" && (
                <ModalEditName hideModals={hideModals} />
            )}

            {currentModal === "modal-delete" && (
                <ModalAccountDelete hideModals={hideModals} />
            )}
        </ModalsWrapper>
    );
};

export default Modals;
