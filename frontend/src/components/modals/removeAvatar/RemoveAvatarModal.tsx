import { IModal } from "../modals.interfaces";
import useRemoveAvatar from "./useRemoveAvatar";
import { ModalSpan } from "../GenericModalComponents.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import {
    RemoveAvatarButtonsWrapper,
    RemoveAvatarWrapper
} from "./RemoveAvatarModal.styled";
import { ErrorIndicator } from "assets/styles/theme";
import useClickOutside from "hooks/useClickOutside";
import useFetchUser from "hooks/useFetchUser";

const RemoveAvatarModal = ({ hideModal }: IModal) => {
    const { userAvatar } = useFetchUser();
    const { removeAvatarHandler, error } = useRemoveAvatar(hideModal);

    const { ref } = useClickOutside(hideModal);

    return (
        <RemoveAvatarWrapper
            ref={ref}
            onSubmit={removeAvatarHandler}>
            <ModalSpan>Czy na pewno chcesz usunąć avatar?</ModalSpan>
            <RemoveAvatarButtonsWrapper>
                <SecondaryButton
                    type="submit"
                    disabled={userAvatar === null}>
                    Tak, usuwam avatar
                </SecondaryButton>
                <PrimaryButton
                    type="button"
                    onClick={hideModal}>
                    Anuluj
                </PrimaryButton>
            </RemoveAvatarButtonsWrapper>
            {error && (
                <ErrorIndicator>
                    {error.response
                        ? error.response.data.message
                        : "Network error"}
                </ErrorIndicator>
            )}
        </RemoveAvatarWrapper>
    );
};

export default RemoveAvatarModal;
