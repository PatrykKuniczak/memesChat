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
import useAccountEdit from "./useAccountEdit";
import { IModal } from "../modals.interfaces";
import useClickOutside from "hooks/useClickOutside";
import { ModalSpan } from "../GenericModalComponents.styled";
import { ErrorIndicator } from "assets/styles/theme";

const EditAccountModal = ({ hideModal }: IModal) => {
    const {
        submitChanges,
        handleChange: handleInputChange,
        values,
        errors,
        touched,
        error,
        fileTypes,
        handleFileChange
    } = useAccountEdit(hideModal);

    const { ref } = useClickOutside(hideModal);

    return (
        <EditAccountWrapper
            ref={ref}
            onSubmit={submitChanges}>
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
                        handleChange={handleFileChange}
                        name="file"
                        types={fileTypes}
                        label="Kliknij aby dodać lub upuść nowy avatar."
                        multiple={false}
                        hoverTitle="Upuść aby dodać"
                        maxSize={5}
                        dropMessageStyle={{ backgroundColor: "black" }}
                    />
                </FileUploaderWrapper>
            </OptionEditAvatar>
            <PrimaryButton type="submit">Zapisz zmiany</PrimaryButton>
            {error && <ErrorIndicator>{error.message}</ErrorIndicator>}
        </EditAccountWrapper>
    );
};

export default EditAccountModal;
