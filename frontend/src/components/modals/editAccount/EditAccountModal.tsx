import { FileUploader } from "react-drag-drop-files";
import {
    EditAccountWrapper,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar,
    InputWrapper,
    Error
} from "./EditAccountModal.styled";
import { PrimaryButton } from "../../buttons/Button.styled";
import useModalEditUsername from "./useModalEditUsername";
import useModalEditAvatar from "./useModalEditAvatar";
import { IModal } from "../modals.interfaces";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { ModalSpan } from "../GenericModalComponents.styled";

const EditAccountModal = ({ hideModal }: IModal) => {
    const {
        file,
        fileTypes,
        handleChange,
        onTypeError,
        onSizeError,
        onDrop,
        onSelect,
        onDraggingStateChange,
        submitChanges
    } = useModalEditAvatar();
    const {
        handleSubmit,
        handleChange: handleInputChange,
        values,
        errors,
        touched
    } = useModalEditUsername(hideModal, file);

    const ref = useRef(null);

    useOnClickOutside(ref, hideModal);

    return (
        <EditAccountWrapper
            ref={ref}
            onSubmit={handleSubmit}>
            <OptionEditAccount>
                <InputWrapper>
                    <ModalSpan>Twój nowy nick:</ModalSpan>
                    <TextInput
                        type="text"
                        id="login"
                        name="login"
                        onChange={handleInputChange}
                        value={values.login}
                    />
                </InputWrapper>
                {errors.login && touched.login && <Error>{errors.login}</Error>}
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
            <PrimaryButton type="submit">Zapisz zmiany</PrimaryButton>
        </EditAccountWrapper>
    );
};

export default EditAccountModal;
