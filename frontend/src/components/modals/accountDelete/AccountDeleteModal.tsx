import {
    DeleteAccountModal,
    DeleteAccountModalButtons
} from "./AccountDeleteModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";

import { useModalAccountDelete } from "./useModalAccountDelete";

import { IModal } from "../modals.interfaces";

const AccountDeleteModal = ({ hideModal }: IModal) => {
    const { deleteAccountConfirm } = useModalAccountDelete(hideModal);

    return (
        <>
            <DeleteAccountModal>
                <ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
                <DeleteAccountModalButtons>
                    <SecondaryButton onClick={deleteAccountConfirm}>
                        Tak, usuwam konto
                    </SecondaryButton>
                    <PrimaryButton onClick={hideModal}>Anuluj</PrimaryButton>
                </DeleteAccountModalButtons>
            </DeleteAccountModal>
        </>
    );
};

export default AccountDeleteModal;
