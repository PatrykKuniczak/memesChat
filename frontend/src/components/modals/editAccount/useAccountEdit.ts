import { useFormik } from "formik";
import useFetchAvatar from "hooks/useFetchAvatar";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { VALIDATION_OFF } from "index";
import { IRequestError } from "helpers/error-interface";
import { updateUser } from "services/UsersService";
import useToken from "hooks/useToken";
import useFetchUser from "hooks/useFetchUser";

export interface IUserUpdateResponse {
    accessToken: string;
}

export interface IUserUpdateRequest {
    username: string;
    userAvatar: Blob | File | null;
}

const useAccountEdit = (hideModal: () => void) => {
    const fileTypes: ["JPG", "PNG"] = ["JPG", "PNG"];

    const { id, username = "", userAvatar } = useFetchUser();
    const { userAvatar: avatar, handleAvatarChange } = useFetchAvatar(
        userAvatar?.id
    );
    const { setAccessToken } = useToken();

    const mutation = useMutation<
        IUserUpdateResponse,
        IRequestError,
        IUserUpdateRequest
    >({
        mutationFn: data => updateUser(id!, data),
        onSuccess: data => {
            setAccessToken(data.accessToken);
            hideModal();
        }
    });

    const updateUsername = (login: string | undefined) => {
        if (id && login) {
            mutation.mutate({ userAvatar: avatar, username: login });
        }
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            login: username
        },
        validationSchema:
            VALIDATION_OFF !== "true" &&
            Yup.object({
                login: loginSchema
            }),
        onSubmit: ({ login }) => {
            updateUsername(login);
        }
    });

    const submitChanges = (event: FormEvent) => {
        event.preventDefault();
        formik.handleSubmit();
    };

    return {
        ...formik,
        submitChanges,
        error: mutation.error,
        userAvatar,
        fileTypes,
        handleAvatarChange
    };
};
export default useAccountEdit;
