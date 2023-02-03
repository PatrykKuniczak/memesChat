import { IModal } from "../modals.interfaces";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import useRemoveAvatar from "./useDeleteAvatar";
import { ModalSpan } from "../GenericModalComponents.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import {
    DeleteAvatarButtonsWrapper,
    DeleteAvatarWrapper
} from "./DeleteAvatarModal.styled";

const DeleteAvatarModal = ({ hideModal }: IModal) => {
    const { deleteAvatarHandler } = useRemoveAvatar(hideModal);

    const ref = useRef(null);

    useOnClickOutside(ref, hideModal);

    return (
        <DeleteAvatarWrapper ref={ref}>
            <ModalSpan>Czy na pewno chcesz usunąć avatar?</ModalSpan>
            <DeleteAvatarButtonsWrapper>
                <SecondaryButton onClick={deleteAvatarHandler}>
                    Tak, usuwam avatar
                </SecondaryButton>
                <PrimaryButton onClick={hideModal}>Anuluj</PrimaryButton>
            </DeleteAvatarButtonsWrapper>
        </DeleteAvatarWrapper>
    );
};

export default DeleteAvatarModal;
