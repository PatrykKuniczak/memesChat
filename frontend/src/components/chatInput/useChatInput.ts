import { FormEvent } from "react";
import useMessageValidation from "hooks/useMessageValidation";

const useChatInput = () => {
    const formik = useMessageValidation();

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();

        if (formik.errors.content) return;

        const newContent = formik.values.content.trim();
        if (!newContent) {
            formik.resetForm();
            return;
        }
        // TODO: create function which will be send message using WS
        formik.resetForm();
    };

    return {
        handleSubmitForm,
        formik
    };
};
export default useChatInput;
