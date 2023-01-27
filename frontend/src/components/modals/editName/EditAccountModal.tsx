import { FileUploader } from "react-drag-drop-files";

import {
    EditAccountWrapper,
    OptionSeparator,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar
} from "./EditAccountModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton } from "../../buttons/Button.styled";

import useModalEditUsername from "./useModalEditUsername";
import useModalEditAvatar from "./useModalEditAvatar";

import { IModal } from "../modals.interfaces";

const EditAccountModal = ({ hideModal }: IModal) => {
    const { newUsername, handleNicknameChange, updateUsername } =
        useModalEditUsername(hideModal);

    const {
        fileTypes,
        file,
        setFile,
        handleChange,
        onTypeError,
        onSizeError,
        onDrop,
        onSelect,
        onDraggingStateChange
    } = useModalEditAvatar();

    return (
        <>
            <EditAccountWrapper>
                <OptionEditAccount>
                    <ModalSpan>Twój nowy nick:</ModalSpan>
                    <TextInput
                        value={newUsername}
                        onChange={handleNicknameChange}
                    />
                    <PrimaryButton onClick={updateUsername}>
                        Zapisz
                    </PrimaryButton>
                </OptionEditAccount>
                <OptionSeparator />
                <OptionEditAvatar>
                    <ModalSpan>Nowy avatar:</ModalSpan>
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        label="Kliknij aby dodać lub upuść nowy avatar."
                        multiple={false}
                        hoverTitle="Upuść aby dodać"
                        onTypeError={onTypeError}
                        maxSize={1}
                        onSizeError={onSizeError}
                        onDrop={onDrop}
                        onSelect={onSelect}
                        onDraggingStateChange={onDraggingStateChange}
                        dropMessageStyle={{ backgroundColor: "fuchsia" }}
                    />
                    <PrimaryButton onClick={handleChange}>Dodaj</PrimaryButton>
                </OptionEditAvatar>
            </EditAccountWrapper>
        </>
    );
};

export default EditAccountModal;
