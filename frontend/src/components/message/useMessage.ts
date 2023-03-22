import { KeyboardEvent, useRef, useState, FormEvent } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { IMessage } from "./Message";
import useMessageValidation from "hooks/useMessageValidation";
import useCloseByEsc from "hooks/useCloseByEsc";

const useMessage = (message: IMessage) => {
    const { content } = message;
    const outsideRef = useRef<HTMLDivElement>(null);
    const [prevContent, setPrevContent] = useState(content);
    const [inputIsOpen, setInputIsOpen] = useState(false);
    const formik = useMessageValidation(content);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();

        if (formik.errors.content) return;

        const newContent = formik.values.content.trim();

        if (!newContent) {
            formik.resetForm();
            closeInputEdit();
            return;
        }

        setPrevContent(newContent);
        formik.setFieldValue("content", newContent);
        // TODO: create function which will be edit message using WS
        closeInputEdit();
    };

    const showInputEdit = () => setInputIsOpen(true);

    const closeInputEdit = () => setInputIsOpen(false);

    const cancelEditing = () => {
        formik.setFieldValue("content", prevContent);
        closeInputEdit();
    };

    const closeInputEditByEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") cancelEditing();
    };

    const showModal = () => {
        if (inputIsOpen) cancelEditing();
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    const handleDeleteMessage = () => {
        // TODO: send request through WS
        closeModal();
    };

    useCloseByEsc(modalIsOpen, closeModal);

    useOnClickOutside(outsideRef, cancelEditing);

    return {
        handleSubmitForm,
        formik,
        outsideRef,
        handleDeleteMessage,
        closeInputEditByEscape,
        inputIsOpen,
        showInputEdit,
        modalIsOpen,
        showModal,
        closeModal
    };
};
export default useMessage;
