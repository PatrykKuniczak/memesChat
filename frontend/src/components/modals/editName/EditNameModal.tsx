import { EditNameWrapper, TextInput } from "./EditNameModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton } from "../../buttons/Button.styled";

import useModalEditName from "./useModalEditName";

import { IModal } from "../modals.interfaces";

const EditNameModal = ({ hideModal }: IModal) => {
    const { newUsername, handleNicknameChange, updateUsername } =
        useModalEditName(hideModal);

    return (
        <>
            <EditNameWrapper>
                <ModalSpan>Twój nowy nick:</ModalSpan>
                <TextInput
                    value={newUsername}
                    onChange={handleNicknameChange}
                />
                <PrimaryButton onClick={updateUsername}>Zapisz</PrimaryButton>
            </EditNameWrapper>
        </>
    );
};

export default EditNameModal;
