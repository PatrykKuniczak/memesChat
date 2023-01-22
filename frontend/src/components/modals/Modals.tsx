import EditNameModal from "./editName/EditNameModal";
import AccountDeleteModal from "./accountDelete/AccountDeleteModal";
import { ModalsWrapper } from "../menu/Menu.styled";
import useModals from "./useModals";
import React from "react";
import { IModals } from "./modals.interfaces";
import DropdownMenu from "./dropdown/DropdownMenu";


const Modals = ({ showMenu, changeMenuVisible }: IModals) => {
    const { currentModal, hideModal, showModal } = useModals(changeMenuVisible);

    return (
        <ModalsWrapper>
            {showMenu && <DropdownMenu showModal={showModal} changeMenuVisible={changeMenuVisible} />}
            {currentModal === "edit" && <EditNameModal hideModal={hideModal} />}
            {currentModal === "delete" && <AccountDeleteModal hideModal={hideModal} />}
        </ModalsWrapper>
    );
};

export default Modals;
