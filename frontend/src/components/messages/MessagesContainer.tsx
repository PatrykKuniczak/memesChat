import useMessages from "./hooks/useMessagesContainer";
import { MessagesWrapper } from "./Messages.styled";

interface IChat {
	searchValue: string;
	searchMode: "user" | "message";
}

const MessagesContainer = ({ searchValue, searchMode }: IChat) => {
	const { MessagesList } = useMessages({ searchValue, searchMode });

	return (
		<MessagesWrapper>
			<MessagesList />
		</MessagesWrapper>
	);
};

export default MessagesContainer;
