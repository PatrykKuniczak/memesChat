import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import useRemoveAvatar from "./useDeleteAvatar";
import { ModalSpan } from "../GenericModalComponents.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import {
    DeleteAvatarButtonsWrapper,
    DeleteAvatarWrapper
} from "./DeleteAvatarModal.styled";
import { ErrorMessage } from "assets/styles/theme";

const DeleteAvatarModal = ({ hideModal }: IModal) => {
    const { deleteAvatarHandler, isError, error } = useRemoveAvatar(hideModal);

	const { ref } = useClickOutside(hideModal);

    return (
        <DeleteAvatarWrapper
            ref={ref}
            onSubmit={deleteAvatarHandler}>
            <ModalSpan>Czy na pewno chcesz usunąć avatar?</ModalSpan>
            <DeleteAvatarButtonsWrapper>
                <SecondaryButton type="submit">
                    Tak, usuwam avatar
                </SecondaryButton>
                <PrimaryButton
                    type="button"
                    onClick={hideModal}>
                    Anuluj
                </PrimaryButton>
            </DeleteAvatarButtonsWrapper>
            <>{isError && <ErrorMessage>{error?.message}</ErrorMessage>}</>
        </DeleteAvatarWrapper>
    );
};

export default DeleteAvatarModal;
