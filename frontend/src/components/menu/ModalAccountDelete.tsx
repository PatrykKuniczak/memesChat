import {
    ModalSpan,
    ButtonPrimary,
    ButtonSecondary,
    ModalBackgroundHandler
} from "./Menu.styled";

import {
    DeleteAccountModal,
    DeleteAccountModalButtons
} from "./ModalAccountDelete.styled";
import { useModalAccountDelete } from "./useModalAccountDelete";

interface ModalAccountDeleteProps {
    hideModals: () => void;
}

const ModalAccountDelete = (props: ModalAccountDeleteProps) => {
    const { hideModals } = props;

    const { deleteAccountConfirm } = useModalAccountDelete();

    const DeleteAccountConfirm = () => {
        //TODO: account delete logic
        deleteAccountConfirm();
        hideModals();
    };

    const DeleteAccountCancel = () => {
        hideModals();
    };

    return (
        <>
            <DeleteAccountModal>
                <ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
                <DeleteAccountModalButtons>
                    <ButtonSecondary onClick={DeleteAccountConfirm}>
                        Tak, usuwam konto
                    </ButtonSecondary>
                    <ButtonPrimary onClick={DeleteAccountCancel}>
                        Anuluj
                    </ButtonPrimary>
                </DeleteAccountModalButtons>
            </DeleteAccountModal>
            <ModalBackgroundHandler onClick={hideModals} />
        </>
    );
};

export default ModalAccountDelete;
