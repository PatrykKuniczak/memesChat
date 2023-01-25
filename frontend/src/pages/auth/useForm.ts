import { useFormik } from "formik";
import * as Yup from "yup";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordConfirmation: ""
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(3, "Login jest za krótki")
                .required("Login jest wymagany"),
            password: Yup.string()
                .matches(
                    passwordRegex,
                    "Hasło musi zawierać minimum osiem znaków, co najmniej jedną litere, cyfre i znak specjalny"
                )
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
        onSubmit: (values) => {
            formik.resetForm();
            console.log(values);
        }
    });
    const { handleChange, touched, values, handleSubmit, errors } = formik;

    return { handleChange, touched, values, handleSubmit, errors };
};

export default useForm;
