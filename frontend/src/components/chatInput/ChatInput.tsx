import {maxCount} from "hooks/useMessageValidation";
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
import {useState} from "react";

const ChatInput = () => {
    const [gifWidgetVisible, setGifWidgetVisible] = useState(false);

    const toggleGifWidgetVisibility = () => {
        setGifWidgetVisible(prevState => !prevState);
    };

    const {
        handleSubmitForm,
        formik: {handleChange, values}
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
            {gifWidgetVisible ? <GifWidget/> : <></>}
            <Counter isError={values.content.length > maxCount}>
                {values.content.length} / {maxCount}
            </Counter>
            <MemeButton>
                <MemeGenerateIcon onClick={toggleGifWidgetVisibility}/>
            </MemeButton>
        </InputWrapper>
    );
};

export default ChatInput;
