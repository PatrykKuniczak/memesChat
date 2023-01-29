import useMessages from "./hooks/useMessagesContainer";
import { MessagesWrapper } from "./Messages.styled";

const MessagesContainer = () => {
    const { MessagesList } = useMessages();

    return (
        <MessagesWrapper>
            <MessagesList />
        </MessagesWrapper>
    );
};

export default MessagesContainer;
