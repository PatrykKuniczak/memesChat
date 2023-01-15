import useMessagesBox from "./useMessagesBox";
import Message from "../message/Message";

const MessagesBox = () => {
    const { filteredMessages } = useMessagesBox();

    return (
        <>
            {filteredMessages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </>
    );
};

export default MessagesBox;
