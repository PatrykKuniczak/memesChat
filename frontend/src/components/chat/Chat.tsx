import { ChatHeader, ChatContainer } from "./Chat.styled";
import MessageSearchBar from "../messageSearchBar/MessageSearchBar";
import Messages from "../messages/Messages";
import ChatInput from "../chatInput/ChatInput";
import useChat from "./useChat";

const Chat = () => {
	const chat = useChat();

	return (
        <ChatContainer>
            <ChatHeader>
                <MessageSearchBar {...chat} />
            </ChatHeader>
            <Messages {...chat} />
            <ChatInput />
        </ChatContainer>
    );
};

export default Chat;
