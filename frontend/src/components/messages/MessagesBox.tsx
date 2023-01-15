import useMessagesBox from "./useMessagesBox";
import { MessagesWrapper } from "./Messages.styled";

const MessagesBox = () => {
    const { MessagesList } = useMessagesBox();

    return (
        <MessagesWrapper>
            <MessagesList />
        </MessagesWrapper>
    );
};

export default MessagesBox;
