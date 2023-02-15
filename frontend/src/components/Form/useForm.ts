import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { login, register } from "services/auth.service";
import { NavigateFunction, useNavigate } from "react-router-dom";

const loginRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex =
    /^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&* ]*$/;
// abcabcabc
// aA1!A1!aA1!A1!

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    let navigate: NavigateFunction = useNavigate();

    const handleLogin = (username: string, password: string) => {
        console.log("login", username, password);
        setMessage("");
        setLoading(true);

        login(username, password).then(
            () => {
                navigate("/"); // go to main page (chat)
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    const handleRegister = (username: string, password: string) => {
        console.log("register", username, password);
        register(username, password).then(
            response => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    };

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
                .matches(
                    loginRegex,
                    "Login może zawierać tylko znaki alfanumeryczne"
                )
                .required("Login jest wymagany"),
            password: Yup.string()
                .min(8, "Hasło jest za krótkie")
                .max(60, "Hasło jest za długie")
                .matches(
                    passwordRegex,
                    "Hasło musi zawierać jedną małą, jedną dużą literę, cyfrę i znak specjalny"
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
        onSubmit: () => {
            isSignUp
                ? handleRegister(formik.values.login, formik.values.password)
                : handleLogin(formik.values.login, formik.values.password);
            formik.resetForm();
        }
    });

    return formik;
};

export default useForm;
