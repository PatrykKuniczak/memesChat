import useMessagesBox from "./useMessagesBox";
import Message from "../message/Message";
import { MessagesWrapper } from "./Messages.styled";

const MessagesBox = () => {
    const { filteredMessages } = useMessagesBox();

    return (
        <MessagesWrapper>
            {filteredMessages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </MessagesWrapper>
    );
};

export default MessagesBox;
