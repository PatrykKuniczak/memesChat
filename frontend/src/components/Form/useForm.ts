import { useFormik } from "formik";
import * as Yup from "yup";

const loginRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex =
    /^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&*]*$/;

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordConfirmation: ""
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(5, "Login jest za krótki")
                .max(30, "Login jest za długi")
                .matches(loginRegex, "Login może zawierać tylko znaki alfanumeryczne")
                .required("Login jest wymagany"),
            password: Yup.string()
                .min(10, "Hasło jest za krótkie")
                .max(60, "Hasło jest za długie")
                .matches(passwordRegex, "Hasło musi zawierać jedną małą, jedną dużą litere, cyfrę i znak specjalny")
                .required("Hasło jest wymagane"),
            passwordConfirmation: isSignUp
                ? Yup.string()
                      .oneOf(
                          [Yup.ref("password")],
                          "Hasła muszą być takie same"
                      )
                      .required("Powtórzenie hasła jest wymagane")
                : Yup.string()
        }),
        onSubmit: () => {
            formik.resetForm();
        }
    });
    const { handleChange, touched, values, handleSubmit, errors } = formik;

    return { handleChange, touched, values, handleSubmit, errors };
};

export default useForm;
