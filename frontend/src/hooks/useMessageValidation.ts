import { useFormik } from "formik";
import * as Yup from "yup";

const regExp =
    /^(https?):\/\/(?:www\.)?[a-zA-Z]{2,}\.[a-z]{2,5}(?!.*(\/{2}|https?|:|\.| )).*$/;
export const maxCount = 500;

const useMessageValidation = (content?: string | null) => {
    const isImage = false;
    return useFormik({
        initialValues: {
            content: content ? content : ""
        },
        validationSchema:
            process.env.REACT_APP_DEVELOPMENT !== "true" &&
            Yup.object({
                content: isImage
                    ? Yup.string().matches(regExp)
                    : Yup.string()
                          .max(
                              maxCount,
                              "Wiadomość może mieć maksymalnie 500 znaków"
                          )
                          .required("Wiadomość nie może być pusta")
            }),
        onSubmit: () => {}
    });
};

export default useMessageValidation;
