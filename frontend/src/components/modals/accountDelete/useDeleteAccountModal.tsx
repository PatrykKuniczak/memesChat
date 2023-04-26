import { useMutation } from "@tanstack/react-query";
import { IRequestError } from "helpers/error-interface";
import { deleteUser } from "services/UsersService";
import useToken from "hooks/useToken";
import { FormEvent } from "react";
import useFetchUser from "hooks/useFetchUser";

export const useDeleteAccountModal = (hideModal: () => void) => {
    const { id } = useFetchUser();
    const { setAccessToken } = useToken();

    const mutation = useMutation<null, IRequestError>({
        mutationFn: () => deleteUser(id!),
        onSuccess: () => {
            setAccessToken("");
            hideModal();
        }
    });
    const deleteAccountConfirm = (event: FormEvent) => {
        event.preventDefault();

        id && mutation.mutate();
    };

    return {
        deleteAccountConfirm,
        hideModal,
        error: mutation.error
    };
};
