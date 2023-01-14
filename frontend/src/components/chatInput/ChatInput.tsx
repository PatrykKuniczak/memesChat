import React from "react";
import {
    InputWrapper,
    MemeButton,
    MemeGenerateButton,
    MemeGenerateIcon,
    MemeIcon,
    MessageInput
} from "pages/home/Home.styled";
import useChatInput from "./useChatInput";

const ChatInput = () => {
    const { chatInput, handleTextInputEnterPress, handleSetCurrentInputValue } =
        useChatInput();

    return (
        <InputWrapper>
            <MessageInput
                ref={chatInput}
                onKeyDown={handleTextInputEnterPress}
                onChange={handleSetCurrentInputValue}
            />
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
