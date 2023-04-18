import { useMutation } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "store/store";
import { FormEvent } from "react";
import { IRequestError } from "helpers/error-interface";
import { deleteAvatar } from "services/UsersAvatarService";
import { removeAvatar } from "store/slices/UserSlice";

const useRemoveAvatar = (hideModal: () => void) => {
    const dispatch = useAppDispatch();
    const avatarId = useAppSelector(state => state.user.avatarId);

    const mutation = useMutation<null, IRequestError>(
        () => deleteAvatar(avatarId),
        {
            onSuccess: () => {
                hideModal();
                dispatch(removeAvatar());
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
