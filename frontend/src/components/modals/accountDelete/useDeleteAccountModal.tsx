export const useDeleteAccountModal = (hideModal: () => void) => {
    const deleteAccountConfirm = () => {
        //TODO: account delete logic
        hideModal();
    };

    return {
        deleteAccountConfirm,
        hideModal
    };
};
