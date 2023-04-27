import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent } from "react";
import { IRequestError } from "helpers/error-interface";
import { deleteAvatar } from "services/UsersAvatarService";
import useFetchUser from "hooks/useFetchUser";

const useRemoveAvatar = (hideModal: () => void) => {
    const { userAvatar } = useFetchUser();
    const queryClient = useQueryClient();

    const mutation = useMutation<null, IRequestError>(
        () => deleteAvatar(userAvatar?.id),
        {
            onSuccess: async () => {
                hideModal();
                await queryClient.invalidateQueries({ queryKey: ["user"] });
            }
        }
    );
    const removeAvatarHandler = (event: FormEvent) => {
        event.preventDefault();

        userAvatar && mutation.mutate();
    };

    return {
        removeAvatarHandler: removeAvatarHandler,
        error: mutation.error
    };
};

export default useRemoveAvatar;
