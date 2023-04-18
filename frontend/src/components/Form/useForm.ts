import useToken from "hooks/useToken";
import { useFormik } from "formik";
import { VALIDATION_OFF } from "index";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { IRequestError } from "helpers/error-interface";
import { sendAuthRequest } from "services/AuthService";
import { fetchUser } from "store/slices/UserSlice";
import { useAppDispatch } from "store/store";

interface IAuthResponse {
    accessToken: string;
}

export interface IAuthRequest {
    username: string;
    password: string;
    event: "register" | "login";
}

export const loginRegex = /^[a-zA-Z0-9]*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).+$/;

export const loginSchema = Yup.string()
    .min(5, "Login jest za krótki")
    .max(30, "Login jest za długi")
    .matches(loginRegex, "Login może zawierać tylko znaki alfanumeryczne")
    .required("Login jest wymagany");

const useForm = ({ isSignUp }: { isSignUp: boolean }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { setAccessToken } = useToken();

    const mutation = useMutation<IAuthResponse, IRequestError, IAuthRequest>({
        mutationFn: sendAuthRequest,
        onSuccess: ({ accessToken }) => {
            setAccessToken(accessToken);
            navigate("/");
            dispatch(fetchUser());
        }
    });

    const handleAuthEvent = (
        username: string,
        password: string,
        event: "register" | "login"
    ) => {
        mutation.mutate({ username, password, event });
    };

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordConfirmation: ""
        },
        validationSchema:
            VALIDATION_OFF !== "true" &&
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

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        formik.handleSubmit();
    };

    return {
        ...formik,
        handleSubmit,
        error: mutation.error,
        resetRequest: mutation.reset
    };
};

export default useForm;
