import { FileUploader } from "react-drag-drop-files";
import {
    EditAccountWrapper,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar,
    Checkbox
} from "./EditAccountModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton } from "../../buttons/Button.styled";
import useModalEditUsername from "./useModalEditUsername";
import useModalEditAvatar from "./useModalEditAvatar";
import { IModal } from "../modals.interfaces";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const EditAccountModal = ({ hideModal }: IModal) => {
    const { newUsername, handleNicknameChange, updateUsername } =
        useModalEditUsername(hideModal);

    const {
        fileTypes,
        handleChange,
        onTypeError,
        onSizeError,
        onDrop,
        onSelect,
        onDraggingStateChange,
        checkboxState,
        toggleRemoveAvatar,
        submitChanges
    } = useModalEditAvatar();

    const ref = useRef(null);
    useOnClickOutside(ref, hideModal);

    return (
        <>
            <EditAccountWrapper ref={ref}>
                <OptionEditAccount>
                    <ModalSpan>Twój nowy nick:</ModalSpan>
                    <TextInput
                        value={newUsername}
                        onChange={handleNicknameChange}
                    />
                </OptionEditAccount>
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
                </OptionEditAvatar>
                <OptionEditAvatar>
                    <ModalSpan>Usuń avatar:</ModalSpan>
                    <Checkbox
                        checked={checkboxState}
                        onChange={toggleRemoveAvatar}
                    />
                </OptionEditAvatar>

                <PrimaryButton onClick={updateUsername}>
                    Zapisz zmiany
                </PrimaryButton>
            </EditAccountWrapper>
        </>
    );
};

export default EditAccountModal;
