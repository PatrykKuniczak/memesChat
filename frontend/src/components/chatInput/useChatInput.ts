import useMessageVal from "hooks/useMessageValidation";

const useChatInput = () => {
    const handleSubmitForm = (content: string) => {
        const newContent = content.trim();
        if (!newContent) {
            formik.resetForm();
            return;
        }
        // TODO: create function which will be send message using WS
        formik.resetForm();
    };

    const formik = useMessageVal({ handleSubmitForm });

    return formik;
};
export default useChatInput;
