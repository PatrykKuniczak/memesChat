import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "store/store";
import { FormEvent } from "react";
import { deleteAvatar } from "store/slices/UserSlice";

const useRemoveAvatar = (hideModal: () => void) => {
    const dispatch = useAppDispatch();
    const avatarId = useAppSelector(state => state.user.avatarId);

    const mutation = useMutation<null, Error>(
        () => axios.delete(`users-avatar/${avatarId}`),
        {
            onSuccess: () => {
                hideModal();
                dispatch(deleteAvatar());
            }
        }
    );
    const removeAvatarHandler = (event: FormEvent) => {
        event.preventDefault();
        mutation.mutate();
    };

    return {
        removeAvatarHandler: removeAvatarHandler,
        error: mutation.error
    };
};

export default useRemoveAvatar;
