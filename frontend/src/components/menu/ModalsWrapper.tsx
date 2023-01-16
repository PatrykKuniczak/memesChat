import ModalDropdown from "./ModalDropdown";
import ModalEditName from "./ModalEditName";
import ModalAccountDelete from "./ModalAccountDelete";

import {
    ModalsWrapper,
} from "./Menu.styled";

const Modals = (props: any) => {
    const {
        currentModal,
        newUsername,
        hideModals,
        updateUsername,
        handleNicknameChange,
        toggleAccountEditModal,
        toggleAccountDeleteModal,
        deleteAccountConfirm,
        deleteAccountCancel
    } = props;

    return (
        <ModalsWrapper>
            {currentModal === 1 && (
                <ModalDropdown
                    toggleAccountEditModal={toggleAccountEditModal}
                    toggleAccountDeleteModal={toggleAccountDeleteModal}
                    hideModals={hideModals}
                />
            )}

            {currentModal === 2 && (
                <ModalEditName
                    newUsername={newUsername}
                    handleNicknameChange={handleNicknameChange}
                    updateUsername={updateUsername}
                    hideModals={hideModals}
                />
            )}

            {currentModal === 3 && (
                <ModalAccountDelete
                    deleteAccountConfirm={deleteAccountConfirm}
                    deleteAccountCancel={deleteAccountCancel}
                    hideModals={hideModals}
                />
            )}
        </ModalsWrapper>
    );
};

export default Modals;
