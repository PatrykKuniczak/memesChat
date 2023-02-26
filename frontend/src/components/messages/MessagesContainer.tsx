import { IUseChat } from "components/chat/useChat";
import useMessages from "./hooks/useMessagesContainer";
import { MessagesWrapper } from "./Messages.styled";

export interface IMessagesContainer
	extends Pick<IUseChat, "searchValue" | "searchMode"> {}

const MessagesContainer = ({ searchValue, searchMode }: IMessagesContainer) => {
	const { MessagesList } = useMessages({ searchValue, searchMode });

	return (
		<MessagesWrapper>
			<MessagesList />
		</MessagesWrapper>
	);
};

export default MessagesContainer;
