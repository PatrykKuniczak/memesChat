import { FileUploader } from "react-drag-drop-files";
import {
    EditAccountWrapper,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar,
    InputWrapper,
    Error,
    FileUploaderWrapper
} from "./EditAccountModal.styled";
import { PrimaryButton } from "../../buttons/Button.styled";
import useModalEditUsername from "./useModalEditUsername";
import useModalEditAvatar from "./useModalEditAvatar";
import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
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
        onDraggingStateChange
    } = useModalEditAvatar();
    const {
        handleSubmit,
        handleChange: handleInputChange,
        values,
        errors,
        touched
    } = useModalEditUsername(hideModal, file);

    const { ref } = useClickOutside(hideModal);

    return (
        <EditAccountWrapper
            ref={ref}
            onSubmit={handleSubmit}>
            <OptionEditAccount>
                <InputWrapper>
                    <ModalSpan>Twój nowy nick:</ModalSpan>
                    <TextInput
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
                <FileUploaderWrapper>
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        label="Kliknij aby dodać lub upuść nowy avatar."
                        multiple={false}
                        hoverTitle="Upuść aby dodać"
                        onTypeError={onTypeError}
                        maxSize={5}
                        onSizeError={onSizeError}
                        onDrop={onDrop}
                        onSelect={onSelect}
                        onDraggingStateChange={onDraggingStateChange}
                        dropMessageStyle={{ backgroundColor: "black" }}
                    />
                </FileUploaderWrapper>
            </OptionEditAvatar>
            <PrimaryButton type="submit">Zapisz zmiany</PrimaryButton>
        </EditAccountWrapper>
    );
};

export default EditAccountModal;
