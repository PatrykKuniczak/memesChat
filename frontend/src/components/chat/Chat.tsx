import React from "react";
import { ChatHeader, ChatContainer } from "./Chat.styled";
import MessageSearchBar from "../searchBar/MessageSearchBar";
import MessagesBox from "../messages/MessagesBox";
import ChatInput from "../chatInput/ChatInput";

const Chat = () => {
    return (
        <ChatContainer>
            <ChatHeader>
                <MessageSearchBar />
            </ChatHeader>
            <MessagesBox />
            <ChatInput />
        </ChatContainer>
    );
};

export default Chat;
