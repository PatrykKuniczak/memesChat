import {
    DeleteAccountWrapper,
    DeleteAccountButtonsWrapper
} from "./DeleteAccountModal.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import { useDeleteAccountModal } from "./useDeleteAccountModal";
import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import { ModalSpan } from "../GenericModalComponents.styled";

const DeleteAccountModal = ({ hideModal }: IModal) => {
    const { deleteAccountConfirm } = useDeleteAccountModal(hideModal);

    const { ref } = useClickOutside(hideModal);

    return (
        <DeleteAccountWrapper ref={ref}>
            <ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
            <DeleteAccountButtonsWrapper>
                <SecondaryButton
                    type="submit"
                    onClick={deleteAccountConfirm}>
                    Tak, usuwam konto
                </SecondaryButton>
                <PrimaryButton
                    type="button"
                    onClick={hideModal}>
                    Anuluj
                </PrimaryButton>
            </DeleteAccountButtonsWrapper>
        </DeleteAccountWrapper>
    );
};

export default DeleteAccountModal;
