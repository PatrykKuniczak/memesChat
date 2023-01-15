import React from "react";
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
    const { chatInput, handleSetCurrentInputValue, handleSubmit } =
        useChatInput();

    return (
        <InputWrapper>
            <Form onSubmit={handleSubmit}>
                <MessageInput
                    ref={chatInput}
                    onChange={handleSetCurrentInputValue}
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
