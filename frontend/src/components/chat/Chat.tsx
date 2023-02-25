import { ChatHeader, ChatContainer } from "./Chat.styled";
import MessageSearchBar from "../messageSearchBar/MessageSearchBar";
import MessagesContainer from "../messages/MessagesContainer";
import ChatInput from "../chatInput/ChatInput";
import useChat from "./useChat";

const Chat = () => {
	const chat = useChat();

	return (
		<ChatContainer>
			<ChatHeader>
				<MessageSearchBar {...chat} />
			</ChatHeader>
			<MessagesContainer {...chat} />
			<ChatInput />
		</ChatContainer>
	);
};

export default Chat;
