import { updateProfile } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, useState } from "react";
import { VALIDATION_OFF } from "index";
import { IRequestError } from "helpers/error-interface";
import { updateUser } from "services/UsersService";
import useToken from "hooks/useToken";

type TUserAvatarFile = File | null;

export interface IUserUpdateResponse {
    accessToken: string;
}

export interface IUserUpdateRequest {
    username: string;
    userAvatar: TUserAvatarFile;
}

const useAccountEdit = (hideModal: () => void) => {
    const [file, setFile] = useState<TUserAvatarFile>(null);
    const dispatch = useAppDispatch();
    const { username, id } = useAppSelector(state => state.user);
    const { setAccessToken } = useToken();
    const fileTypes: ["JPG", "PNG"] = ["JPG", "PNG"];

    const fetchNewAvatar = (callback: (id: number) => void) => {
        axios
            .get(`users/${id}`)
            .then(({ data }) => callback(data.userAvatar.id));
    };

    const mutation = useMutation<
        IUserUpdateResponse,
        IRequestError,
        IUserUpdateRequest
    >({
        mutationFn: data => updateUser(id, data),
        onSuccess: data => {
            fetchNewAvatar(id => dispatch(updateProfile({ avatarId: id })));
            setAccessToken(data.accessToken);
            hideModal();
        }
    });

    const updateUsername = (login: string) => {
        mutation.mutate({ userAvatar: file, username: login });
    };

    const formik = useFormik({
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

    const handleFileChange = (file: TUserAvatarFile) => {
        setFile(file);
    };

    return {
        ...formik,
        submitChanges,
        error: mutation.error,
        file,
        fileTypes,
        handleFileChange
    };
};
export default useAccountEdit;
