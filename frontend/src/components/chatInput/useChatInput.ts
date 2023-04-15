import { FormEvent, useState } from "react";
import useMessageValidation from "hooks/useMessageValidation";

const useChatInput = () => {
    const [gifWidgetVisible, setGifWidgetVisible] = useState(false);
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

    const toggleGifWidgetVisibility = () => {
        setGifWidgetVisible(prevState => !prevState);
    };

    return {
        handleSubmitForm,
        formik,
        gifWidgetVisible,
        toggleGifWidgetVisibility
    };
};
export default useChatInput;
