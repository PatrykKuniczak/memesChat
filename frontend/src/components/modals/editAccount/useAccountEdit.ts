import { updateProfile } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { VALIDATION_OFF } from "index";
import { IRequestError } from "helpers/error-interface";
import { getUser, updateUser } from "services/UsersService";
import useToken from "hooks/useToken";
import { getAvatar } from "services/UsersAvatarService";
import { updateInterceptor } from "helpers/axios/AuthIncereptor";

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
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryKey: ["user3", id],
        queryFn: () => getUser(id),
        enabled: !!id
    });
    useQuery({
        queryKey: ["avatar4", data?.userAvatar?.id],
        queryFn: () => getAvatar(data?.userAvatar?.id),
        onSuccess: setFile,
        enabled: !!data?.userAvatar?.id && !file
    });

    const mutation = useMutation<
        IUserUpdateResponse,
        IRequestError,
        IUserUpdateRequest
    >({
        mutationFn: data => updateUser(id, data),
        onSuccess: data => {
            setAccessToken(data.accessToken);
            updateInterceptor(data.accessToken);

            getUser(id).then(data => {
                if (data.userAvatar) {
                    dispatch(updateProfile({ avatarId: data.userAvatar.id }));
                    queryClient.invalidateQueries({ queryKey: ["user2"] });
                    queryClient.invalidateQueries({ queryKey: ["user3"] });
                }
            });
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
