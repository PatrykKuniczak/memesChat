import { ModalsWrapper } from "./Modals.styled";

import DropdownMenu from "./dropdown/DropdownMenu";
import EditNameModal from "./editName/EditNameModal";
import AccountDeleteModal from "./accountDelete/AccountDeleteModal";

import useModals from "./useModals";

import { IModals } from "./modals.interfaces";

const Modals = ({ showMenu, changeMenuVisible }: IModals) => {
    const { currentModal, hideModal, showModal } = useModals(changeMenuVisible);

    return (
        <ModalsWrapper>
            {showMenu && (
                <DropdownMenu
                    showModal={showModal}
                    changeMenuVisible={changeMenuVisible}
                />
            )}
            {currentModal === "edit" && <EditNameModal hideModal={hideModal} />}
            {currentModal === "delete" && (
                <AccountDeleteModal hideModal={hideModal} />
            )}
        </ModalsWrapper>
    );
};

export default Modals;
