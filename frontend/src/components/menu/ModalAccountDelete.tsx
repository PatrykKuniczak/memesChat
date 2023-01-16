import {
    ModalSpan,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ModalBackgroundHandler
} from "./Menu.styled";

const ModalAccountDelete = (props: any) => {
    const { deleteAccountConfirm, deleteAccountCancel, hideModals } = props;
    return (
        <>
            <DeleteAccountModal>
                <ModalSpan>Czy na pewno chcesz usunąć konto?</ModalSpan>
                <DeleteAccountModalButtons>
                    <ButtonSecondary onClick={deleteAccountConfirm}>
                        Tak, usuwam konto
                    </ButtonSecondary>
                    <ButtonPrimary onClick={deleteAccountCancel}>
                        Anuluj
                    </ButtonPrimary>
                </DeleteAccountModalButtons>
            </DeleteAccountModal>
            <ModalBackgroundHandler onClick={hideModals} />
        </>
    );
};

export default ModalAccountDelete;
