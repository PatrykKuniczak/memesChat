import axios from "axios";
import useSaveToken from "hooks/useSaveToken";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex =
    /^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&* ]*$/;

// todo: REMOVE IT AFTER CREATE SHUT DOWN VALIDATION
// abcabcabc
// aA1!A1!aA1!

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const navigate = useNavigate();
    const { setAccessToken } = useSaveToken();

    const handleAuthEvent = (
        username: string,
        password: string,
        event: "register" | "login"
    ) => {
        axios
            .post<{ accessToken: string }>(`/auth/${event}`, {
                username,
                password
            })
            .then(res => {
                if (res.status === 200) {
                    setAccessToken(res.data.accessToken);
                    navigate("/");
                }
            })
            .catch(err => {
                console.log(err.message);
            });
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
                ? handleAuthEvent(
                      formik.values.login,
                      formik.values.password,
                      "register"
                  )
                : handleAuthEvent(
                      formik.values.login,
                      formik.values.password,
                      "login"
                  );
            formik.resetForm();
        }
    });

    return formik;
};

export default useForm;
