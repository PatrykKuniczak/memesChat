import {
    ModalSpan,
    TextInput,
    SubmitButton,
    ModalBackgroundHandler
} from "./Menu.styled";

import { EditNameModal } from "./ModalEditName.styled";

const ModalEditName = (props: any) => {
    const { newUsername, handleNicknameChange, updateUsername, hideModals } =
        props;

    return (
        <>
            <EditNameModal>
                <ModalSpan>Twój nowy nick:</ModalSpan>
                <TextInput
                    type="text"
                    value={newUsername}
                    onChange={handleNicknameChange}
                />
                <SubmitButton onClick={updateUsername}>Zapisz</SubmitButton>
            </EditNameModal>
            <ModalBackgroundHandler onClick={hideModals} />
        </>
    );
};

export default ModalEditName;
