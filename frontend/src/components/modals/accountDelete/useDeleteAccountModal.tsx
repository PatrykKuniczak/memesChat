import { useMutation } from "@tanstack/react-query";
import { IRequestError } from "helpers/error-interface";
import { deleteUser } from "services/UsersService";
import { useAppSelector } from "store/store";
import useToken from "hooks/useToken";
import { FormEvent } from "react";

export const useDeleteAccountModal = (hideModal: () => void) => {
    const id = useAppSelector(state => state.user.id);
    const { setAccessToken } = useToken();

    const mutation = useMutation<null, IRequestError>({
        mutationFn: () => deleteUser(id),
        onSuccess: () => {
            setAccessToken("");
            hideModal();
        }
    });
    const deleteAccountConfirm = (event: FormEvent) => {
        event.preventDefault();
        mutation.mutate();
    };

    return {
        deleteAccountConfirm,
        hideModal,
        error: mutation.error
    };
};
