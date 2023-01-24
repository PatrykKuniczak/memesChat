import { ChatHeader, ChatContainer } from "./Chat.styled";
import MessageSearchBar from "../searchBar/MessageSearchBar";
import MessagesContainer from "../messages/MessagesContainer";
import ChatInput from "../chatInput/ChatInput";

const Chat = () => {
    return (
        <ChatContainer>
            <ChatHeader>
                <MessageSearchBar />
            </ChatHeader>
            <MessagesContainer />
            <ChatInput />
        </ChatContainer>
    );
};

export default Chat;
