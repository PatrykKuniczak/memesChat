import {
    Form,
    InputWrapper,
    MemeButton,
    MemeGenerateButton,
    MemeGenerateIcon,
    MemeIcon,
    MessageInput
} from "./ChatInput.styled";
import useChatInput from "./useChatInput";


const ChatInput = () => {
    const { currentInputValue, handleSetCurrentInputValue, handleSubmit } =
        useChatInput();

    return (
        <InputWrapper>
            <Form onSubmit={handleSubmit}>
                <MessageInput
                    onChange={handleSetCurrentInputValue}
                    value={currentInputValue}
                    autoFocus
                />
            </Form>
            <MemeButton>
                <MemeIcon />
            </MemeButton>
            <MemeGenerateButton>
                <MemeGenerateIcon />
            </MemeGenerateButton>
        </InputWrapper>
    );
};

export default ChatInput;
