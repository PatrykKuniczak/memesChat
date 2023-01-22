import {
    ButtonPrimary,
    ButtonSecondary,
    DeleteAccountModal,
    DeleteAccountModalButtons
} from "./AccountDeleteModal.styled";
import { useModalAccountDelete } from "./useModalAccountDelete";
import React from "react";
import { ModalSpan } from "../../menu/Menu.styled";
import { IModal } from "../modals.interfaces";

const AccountDeleteModal = ({ hideModal }: IModal) => {
    const { deleteAccountConfirm } = useModalAccountDelete(hideModal);

    return (
        <>
            <DeleteAccountModal>
                <ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
                <DeleteAccountModalButtons>
                    <ButtonSecondary onClick={deleteAccountConfirm}>
                        Tak, usuwam konto
                    </ButtonSecondary>
                    <ButtonPrimary onClick={hideModal}>
                        Anuluj
                    </ButtonPrimary>
                </DeleteAccountModalButtons>
            </DeleteAccountModal>
        </>
    );
};

export default AccountDeleteModal;
