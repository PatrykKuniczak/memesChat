import {
	DeleteAccountWrapper,
	DeleteAccountButtonsWrapper
} from "./DeleteAccountModal.styled";
import { PrimaryButton, SecondaryButton } from "../../buttons/Button.styled";
import { useDeleteAccountModal } from "./useDeleteAccountModal";
import { IModal } from "../modals.interfaces";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ModalSpan } from "../GenericModalComponents.styled";

const DeleteAccountModal = ({ hideModal }: IModal) => {
	const { deleteAccountConfirm } = useDeleteAccountModal(hideModal);

	const ref = useRef(null);

	useOnClickOutside(ref, hideModal);

	return (
		<DeleteAccountWrapper ref={ref}>
			<ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
			<DeleteAccountButtonsWrapper>
				<SecondaryButton onClick={deleteAccountConfirm}>
					Tak, usuwam konto
				</SecondaryButton>
				<PrimaryButton onClick={hideModal}>Anuluj</PrimaryButton>
			</DeleteAccountButtonsWrapper>
		</DeleteAccountWrapper>
	);
};

export default DeleteAccountModal;
