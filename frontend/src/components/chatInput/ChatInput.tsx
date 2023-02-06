import {
	Form,
	InputWrapper,
	MemeButton,
	MemeGenerateIcon,
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
				<MemeGenerateIcon />
			</MemeButton>
		</InputWrapper>
	);
};

export default ChatInput;
