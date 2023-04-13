import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import useRemoveAvatar from "./useDeleteAvatar";
import { ModalSpan } from "../GenericModalComponents.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import {
	DeleteAvatarButtonsWrapper,
	DeleteAvatarWrapper
} from "./DeleteAvatarModal.styled";

const DeleteAvatarModal = ({ hideModal }: IModal) => {
	const { deleteAvatarHandler } = useRemoveAvatar(hideModal);

	const { ref } = useClickOutside(hideModal);

	return (
		<DeleteAvatarWrapper ref={ref}>
			<ModalSpan>Czy na pewno chcesz usunąć avatar?</ModalSpan>
			<DeleteAvatarButtonsWrapper>
				<SecondaryButton type="submit" onClick={deleteAvatarHandler}>
					Tak, usuwam avatar
				</SecondaryButton>
				<PrimaryButton type="button" onClick={hideModal}>Anuluj</PrimaryButton>
			</DeleteAvatarButtonsWrapper>
		</DeleteAvatarWrapper>
	);
};

export default DeleteAvatarModal;
