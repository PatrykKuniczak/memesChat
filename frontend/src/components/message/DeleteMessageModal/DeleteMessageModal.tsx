import { FC } from "react";
import useClickOutside from "hooks/useClickOutside";
import {
    ButtonsWrapper,
    ModalSpan
} from "components/modals/GenericModalComponents.styled";
import {
    PrimaryButton,
    SecondaryButton
} from "components/buttons/Button.styled";
import { DeleteMessageWrapper } from "./DeleteMessageModal.styled";

const DeleteMessageModal: FC<{
    closeModal: () => void;
    handleDeleteMessage: () => void;
}> = ({ closeModal, handleDeleteMessage }) => {
    const { ref } = useClickOutside(closeModal);

    return (
        <DeleteMessageWrapper ref={ref}>
            <ModalSpan>Czy na pewno chcesz usunąć wiadomość?</ModalSpan>
            <ButtonsWrapper>
                <SecondaryButton onClick={handleDeleteMessage}>
                    Tak
                </SecondaryButton>
                <PrimaryButton onClick={closeModal}>Nie</PrimaryButton>
            </ButtonsWrapper>
        </DeleteMessageWrapper>
    );
};

export default DeleteMessageModal;
