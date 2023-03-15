import { KeyboardEvent, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { IMessage } from "./Message";
import useMessageVal from "hooks/useMessageValidation";

const useMessage = (message: IMessage) => {
    const { content } = message;

    const handleSubmitForm = (content: string) => {
        const newMessage = content.trim();
        if (!newMessage) {
            formik.resetForm();
            closeInputEdit();
            return;
        }
        // TODO: create function which will be edit message using WS
        closeInputEdit();
    };

    const formik = useMessageVal({ handleSubmitForm, defaultContent: content });
    const outsideRef = useRef<HTMLDivElement>(null);
    const [inputIsOpen, setInputIsOpen] = useState(false);

    const showInputEdit = () => setInputIsOpen(true);

    const closeInputEdit = () => {
        if (formik.errors.content) {
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
