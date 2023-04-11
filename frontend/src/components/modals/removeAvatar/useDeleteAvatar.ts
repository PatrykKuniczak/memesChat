import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "store/store";
import { FormEvent } from "react";
import { deleteAvatar } from "store/slices/UserSlice";

const useDeleteAvatar = (hideModal: () => void) => {
    const dispatch = useAppDispatch();
    const avatarId = useAppSelector(state => state.user.avatarId);

    const mutation = useMutation<string, Error>(
        () => axios.delete(`users-avatar/${avatarId}`),
        {
            onSuccess: () => {
                hideModal();
                dispatch(deleteAvatar());
            }
        }
    );
    const deleteAvatarHandler = (event: FormEvent) => {
        event.preventDefault();
        mutation.mutate();
    };

    return {
        deleteAvatarHandler,
        isError: mutation.isError,
        error: mutation.error
    };
};

export default useDeleteAvatar;
