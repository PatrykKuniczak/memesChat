import { editUsername, updateProfile } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, useState } from "react";

export type TUserAvatarFile = File | null;

interface IUserUpdateResponse {
    accessToken: string;
}

interface IUserUpdateRequest {
    username: string;
    userAvatar: TUserAvatarFile;
}

const useAccountEdit = (hideModal: () => void) => {
    const dispatch = useAppDispatch();
    const { username, id } = useAppSelector(state => state.user);
    const fileTypes: ["JPG", "PNG"] = ["JPG", "PNG"];
    const [file, setFile] = useState<TUserAvatarFile>(null);

    const fetchNewAvatar = (callback: (id: number) => void) => {
        axios
            .get(`users/${id}`)
            .then(({ data }) => callback(data.userAvatar.id));
    };

    const mutation = useMutation<
        IUserUpdateResponse,
        Error,
        IUserUpdateRequest
    >({
        mutationFn: data => {
            return axios.patch(`users/${id}`, data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
        },
        onSuccess: () => {
            fetchNewAvatar(id => dispatch(updateProfile({ avatarId: id })));
            hideModal();
        }
    });

    const updateUsername = (login: string) => {
        dispatch(editUsername(login));
        mutation.mutate({ userAvatar: file, username: login });
    };

    const formik = useFormik({
        initialValues: {
            login: username
        },
        validationSchema:
            process.env.REACT_APP_DEVELOPMENT !== "true" &&
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
