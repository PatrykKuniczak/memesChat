import { editUsername, updateProfile } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent, useState } from "react";

interface MutationResponse {
    accessToken: string;
}

interface MutationVariables {
    username: string;
    userAvatar: File | null;
}

const useAccountEdit = (hideModal: () => void) => {
    const dispatch = useAppDispatch();
    const { username, id } = useAppSelector(state => state.user);
    const fileTypes = ["JPG", "PNG"];
    const [file, setFile] = useState<File | null>(null);

    const fetchNewAvatar = (callback: (id: number) => void) => {
        axios
            .get(`users/${id}`)
            .then(({ data }) => callback(data.userAvatar.id));
    };

    const mutation = useMutation<MutationResponse, Error, MutationVariables>({
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

    const handleFileChange = (file: File) => {
        setFile(file);
    };

    const onTypeError = (err: string) => {
        console.log(err);
    };

    const onSizeError = (err: string) => console.log(err);

    return {
        ...formik,
        submitChanges,
        error: mutation.error,
        file,
        fileTypes,
        handleFileChange,
        onTypeError,
        onSizeError
    };
};
export default useAccountEdit;
