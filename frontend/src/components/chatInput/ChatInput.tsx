import { maxCount } from "hooks/useMessageValidation";
import {
    Counter,
    Form,
    InputWrapper,
    MemeButton,
    MemeGenerateIcon,
    MessageInput
} from "./ChatInput.styled";
import useChatInput from "./useChatInput";
import GifWidget from "components/GifWidget/GifWidget";

const ChatInput = () => {
    const { gifWidgetVisible, toggleGifWidgetVisibility } = useChatInput();

    const {
        handleSubmitForm,
        formik: { handleChange, values }
    } = useChatInput();

    return (
        <InputWrapper>
            <Form onSubmit={handleSubmitForm}>
                <MessageInput
                    id="content"
                    name="content"
                    onChange={handleChange}
                    value={values.content}
                    autoComplete="off"
                    autoFocus
                />
            </Form>
            {gifWidgetVisible && (
                <GifWidget
                    toggleGifWidgetVisibility={toggleGifWidgetVisibility}
                />
            )}
            <Counter isError={values.content.length > maxCount}>
                {values.content.length} / {maxCount}
            </Counter>
            <MemeButton gifWidgetVisible={gifWidgetVisible}>
                <MemeGenerateIcon onClick={toggleGifWidgetVisibility} />
            </MemeButton>
        </InputWrapper>
    );
};

export default ChatInput;
