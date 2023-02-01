import {
    DeleteAccountModal,
    DeleteAccountModalButtons
} from "./AccountDeleteModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import { useModalAccountDelete } from "./useModalAccountDelete";
import { IModal } from "../modals.interfaces";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const AccountDeleteModal = ({ hideModal }: IModal) => {
    const { deleteAccountConfirm } = useModalAccountDelete(hideModal);

    const ref = useRef(null);
    useOnClickOutside(ref, hideModal);

    return (
        <>
            <DeleteAccountModal ref={ref}>
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
