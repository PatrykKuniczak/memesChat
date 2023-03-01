import { editUsername } from "store/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "components/Form/useForm";

const useModalEditUsername = (hideModal: () => void, avatar: File | any) => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(state => state.user.username);
    const formik = useFormik({
        initialValues: {
            login: username
        },
        validationSchema: Yup.object({
            login: loginSchema
        }),
        onSubmit: ({ login }) => {
            updateUsername(login);
            hideModal();
            // TODO: create function which will be send login and avatar to api
        }
    });

    const updateUsername = (login: string) => {
        dispatch(editUsername(login));
    };

    return formik;
};

export default useModalEditUsername;
