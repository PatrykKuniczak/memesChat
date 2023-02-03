const useDeleteAvatar = (hideModal: () => void) => {
    const deleteAvatarHandler = () => {
        //TODO: IMPLEMENT BACKEND LOGIC
        hideModal();
    };

    return {
        deleteAvatarHandler
    };
};

export default useDeleteAvatar;
