import {
    ModalSpan,
    TextInput,
    SubmitButton
} from "../../menu/Menu.styled";
import React from "react";
import { EditNameWrapper } from "./EditNameModal.styled";
import useModalEditName from "./useModalEditName";
import { IModal } from "../modals.interfaces";

const EditNameModal = ({ hideModal }: IModal) => {
    const { newUsername, handleNicknameChange, updateUsername } = useModalEditName(hideModal);

    return (
        <>
            <EditNameWrapper>
                <ModalSpan>Twój nowy nick:</ModalSpan>
                <TextInput
                    value={newUsername}
                    onChange={handleNicknameChange}
                />
                <SubmitButton onClick={updateUsername}>Zapisz</SubmitButton>
            </EditNameWrapper>
        </>
    );
};

export default EditNameModal;
