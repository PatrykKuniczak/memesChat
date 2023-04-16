import { KeyboardEvent, useState, FormEvent } from "react";
import useClickOutside from "hooks/useClickOutside";
import { IMessage } from "./Message";
import useMessageValidation from "hooks/useMessageValidation";
import useCloseByEsc from "hooks/useCloseByEsc";

const useMessage = (message: IMessage, hide: () => void) => {
    const { content } = message;

    const [prevContent, setPrevContent] = useState(content);
    const [inputIsOpen, setInputIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const formik = useMessageValidation(content);

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
        hide();
    };

    const inputKeyDownHandler = (event: KeyboardEvent) => {
        if (event.key === "Escape") cancelEditing();
        if (event.key === "Enter") handleSubmitForm(event);
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

    const { ref } = useClickOutside(cancelEditing);

    return {
        handleSubmitForm,
        formik,
        ref,
        handleDeleteMessage,
        inputKeyDownHandler,
        inputIsOpen,
        showInputEdit,
        modalIsOpen,
        showModal,
        closeModal
    };
};
export default useMessage;
