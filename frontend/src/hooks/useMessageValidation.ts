import { useFormik } from "formik";
import * as Yup from "yup";

const regExp =
    /^(https?):\/\/(?:www\.)?[a-zA-Z]{2,}\.[a-z]{2,5}(?!.*(\/{2}|https?|:|\.| )).*$/;
export const maxCount = 500;

interface IMessageVal {
    handleSubmitForm: (content: string) => void;
    defaultContent?: string;
}

const useMessageValidation = ({
    handleSubmitForm,
    defaultContent
}: IMessageVal) => {
    const isImage = false;
    const formik = useFormik({
        initialValues: {
            content: defaultContent ? defaultContent : ""
        },
        validationSchema: Yup.object({
            content: isImage
                ? Yup.string().matches(regExp)
                : Yup.string()
                      .max(
                          maxCount,
                          "Wiadomość może mieć maksymalnie 500 znaków"
                      )
                      .required("Wiadomość nie może być pusta")
        }),
        onSubmit: ({ content }) => handleSubmitForm(content)
    });

    return formik;
};

export default useMessageValidation;