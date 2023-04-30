import {
    DeleteAccountWrapper,
    DeleteAccountButtonsWrapper
} from "./DeleteAccountModal.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import { useDeleteAccountModal } from "./useDeleteAccountModal";
import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import { ModalSpan } from "../GenericModalComponents.styled";
import { ErrorIndicator } from "assets/styles/theme";

const DeleteAccountModal = ({ hideModal }: IModal) => {
    const { deleteAccountConfirm, error } = useDeleteAccountModal(hideModal);

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
            {error && (
                <ErrorIndicator>
                    {error.response
                        ? error.response.data.message
                        : "Network error"}
                </ErrorIndicator>
            )}
        </DeleteAccountWrapper>
    );
};

export default DeleteAccountModal;
