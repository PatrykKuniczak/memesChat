import {
    ModalSpan,
    TextInput,
    SubmitButton,
    ModalBackgroundHandler
} from "./Menu.styled";

import { EditNameModal } from "./ModalEditName.styled";
import { useModalEditName } from "./useModalEditName";

interface ModalEditNameProps {
    hideModals: () => void;
}

const ModalEditName = (props: ModalEditNameProps) => {
    const { hideModals } = props;

    const { newUsername, handleNicknameChange, updateUsername } =
        useModalEditName();

    const EditNameSubmit = (event: any) => {
        updateUsername(event);
        hideModals();
    };

    return (
        <>
            <EditNameModal>
                <ModalSpan>Twój nowy nick:</ModalSpan>
                <TextInput
                    type="text"
                    value={newUsername}
                    onChange={handleNicknameChange}
                />
                <SubmitButton onClick={EditNameSubmit}>Zapisz</SubmitButton>
            </EditNameModal>
            <ModalBackgroundHandler onClick={hideModals} />
        </>
    );
};

export default ModalEditName;
