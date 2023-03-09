import { KeyboardEvent, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { IMessage } from "./Message";
import { useFormik } from "formik";
import * as Yup from "yup";
import { maxCount, messageRegExp } from "components/chatInput/useChatInput";

const useMessage = (
    message: IMessage,
    imageUrl = "https://images.com/hbg23vhgvansd"
) => {
    const { id, content, author } = message;
    const formik = useFormik({
        initialValues: {
            message: content,
            imageUrl
        },
        validationSchema: Yup.object({
            message: Yup.string()
                .max(maxCount, "Wiadomość może mieć maksymalnie 500 znaków")
                .required("Wiadomość nie może być pusta"),
            imageUrl: Yup.string().matches(messageRegExp)
        }),
        onSubmit: ({ message, imageUrl }) => {
            const newMessage = message.trim();
            if (!newMessage) {
                formik.resetForm();
                closeInputEdit();
                return;
            }
            // TODO: create function which will be edit message using WS
            closeInputEdit();
        }
    });

    const outsideRef = useRef<HTMLDivElement>(null);
    const [inputIsOpen, setInputIsOpen] = useState(false);

    const showInputEdit = () => setInputIsOpen(true);

    const closeInputEdit = () => {
        if (formik.errors.message) {
            formik.resetForm();
        }
        setInputIsOpen(false);
    };

    const closeInputEditByEscape = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            formik.resetForm();
            closeInputEdit();
        }
    };

    const handleDeleteMessage = () => {
        // TODO: send request through WS
    };

    const handleEditMessage = () => formik.handleSubmit();

    useOnClickOutside(outsideRef, closeInputEdit);

    return {
        formik,
        outsideRef,
        handleDeleteMessage,
        closeInputEditByEscape,
        inputIsOpen,
        showInputEdit,
        handleEditMessage
    };
};
export default useMessage;
