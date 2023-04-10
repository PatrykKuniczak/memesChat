import axios from "axios";
import useToken from "hooks/useToken";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const loginRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/;

export const loginSchema = Yup.string()
    .min(5, "Login jest za krótki")
    .max(30, "Login jest za długi")
    .matches(loginRegex, "Login może zawierać tylko znaki alfanumeryczne")
    .required("Login jest wymagany");

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const navigate = useNavigate();
    const { setAccessToken } = useToken();

    const handleAuthEvent = (
        username: string,
        password: string,
        event: "register" | "login"
    ) => {
        axios
            .post<{ accessToken: string }>(`auth/${event}`, {
                username,
                password
            })
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    setAccessToken(res.data.accessToken);
                    navigate("/");
                }
            })
            .catch(err => {
                console.error(err.message);
            });
    };

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordConfirmation: ""
        },
        validationSchema:
            process.env.REACT_APP_DEVELOPMENT !== "true" &&
            Yup.object({
                login: loginSchema,
                password: Yup.string()
                    .min(10, "Hasło jest zbyt krótkie")
                    .max(60, "Hasło jest za długie")
                    .matches(
                        passwordRegex,
                        "Hasło musi zawierać jedną małą, jedną dużą literę, cyfrę lub znak specjalny"
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
