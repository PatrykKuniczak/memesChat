import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import useRemoveAvatar from "./useDeleteAvatar";
import { ModalSpan } from "../GenericModalComponents.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import {
    RemoveAvatarButtonsWrapper,
    RemoveAvatarWrapper
} from "./RemoveAvatarModal.styled";
import { ErrorIndicator } from "assets/styles/theme";

const RemoveAvatarModal = ({ hideModal }: IModal) => {
    const { removeAvatarHandler, error } = useRemoveAvatar(hideModal);

	const { ref } = useClickOutside(hideModal);

    return (
        <RemoveAvatarWrapper
            ref={ref}
            onSubmit={removeAvatarHandler}>
            <ModalSpan>Czy na pewno chcesz usunąć avatar?</ModalSpan>
            <RemoveAvatarButtonsWrapper>
                <SecondaryButton type="submit">
                    Tak, usuwam avatar
                </SecondaryButton>
                <PrimaryButton
                    type="button"
                    onClick={hideModal}>
                    Anuluj
                </PrimaryButton>
            </RemoveAvatarButtonsWrapper>
            {error && <ErrorIndicator>{error.message}</ErrorIndicator>}
        </RemoveAvatarWrapper>
    );
};

export default RemoveAvatarModal;
