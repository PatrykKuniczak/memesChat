import {
    Counter,
    Form,
    InputWrapper,
    MemeButton,
    MemeGenerateIcon,
    MessageInput
} from "./ChatInput.styled";
import useChatInput, { maxCount } from "./useChatInput";

const ChatInput = () => {
    const { handleSubmit, handleChange, values } = useChatInput();

    return (
        <InputWrapper>
            <Form onSubmit={handleSubmit}>
                <MessageInput
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    autoFocus
                />
            </Form>
            <Counter isError={values.message.length > maxCount}>
                {values.message.length} / {maxCount}
            </Counter>
            <MemeButton>
                <MemeGenerateIcon />
            </MemeButton>
        </InputWrapper>
    );
};

export default ChatInput;
