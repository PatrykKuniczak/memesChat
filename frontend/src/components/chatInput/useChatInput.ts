import { useFormik } from "formik";
import * as Yup from "yup";

export const messageRegExp =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.\S{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.\S{2,}|www\.[a-zA-Z0-9]+\.\S{2,})/;
export const maxCount = 500;

const useChatInput = (imageUrl = "https://images.com/hbg23vhgvansd") => {
    const formik = useFormik({
        initialValues: {
            message: "",
            imageUrl
        },
        validationSchema: Yup.object({
            message: Yup.string().max(maxCount).required(),
            imageUrl: Yup.string().matches(messageRegExp)
        }),
        onSubmit: ({ message, imageUrl }) => {
            const newMessage = message.trim();
            if (!newMessage) {
                formik.resetForm();
                return;
            }
            // TODO: create function which will be send message using WS
            formik.resetForm();
        }
    });

    return formik;
};

export default useChatInput;
