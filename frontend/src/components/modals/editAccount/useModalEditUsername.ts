import { editUsername } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";

const useModalEditUsername = (hideModal: () => void, avatar: File | null) => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(state => state.user.username);

    const updateUsername = (login: string) => {
        dispatch(editUsername(login));
    };

    return useFormik({
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
            hideModal();
            // TODO: create function which will be send login and avatar to api
        }
    });
};

export default useModalEditUsername;
