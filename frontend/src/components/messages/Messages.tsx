import { IUseChat } from "components/chat/useChat";
import { MessagesWrapper } from "./Messages.styled";
import useMessages from "./useMessages";

export interface IMessagesContainer
	extends Pick<IUseChat, "searchValue" | "searchMode"> {}

const Messages = ({ searchValue, searchMode }: IMessagesContainer) => {
    const { MessagesList } = useMessages({ searchValue, searchMode });

    return (
        <MessagesWrapper>
            <MessagesList />
        </MessagesWrapper>
    );
};

export default Messages;
