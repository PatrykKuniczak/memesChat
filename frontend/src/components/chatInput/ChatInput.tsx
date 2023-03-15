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

const ChatInput = () => {
    const { handleSubmit, handleChange, values } = useChatInput();

    return (
        <InputWrapper>
            <Form onSubmit={handleSubmit}>
                <MessageInput
                    id="content"
                    name="content"
                    onChange={handleChange}
                    value={values.content}
                    autoFocus
                />
            </Form>
            <Counter isError={values.content.length > maxCount}>
                {values.content.length} / {maxCount}
            </Counter>
            <MemeButton>
                <MemeGenerateIcon />
            </MemeButton>
        </InputWrapper>
    );
};

export default ChatInput;
