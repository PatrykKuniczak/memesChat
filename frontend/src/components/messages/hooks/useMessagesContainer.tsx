import { startTransition, useDeferredValue, useEffect, useState } from "react";
import Message, { IMessage } from "../../message/Message";
import useMessages from "./useMessages";
import { messagesAfterFilter } from "helpers/messagesFiltering";

export type TMessages = IMessage[];

interface IChat {
	searchValue: string;
	searchMode: "user" | "message";
}

const useMessagesContainer = ({ searchValue, searchMode }: IChat) => {
	const [filteredMessages, setFilteredMessages] = useState<TMessages>([]);
	const deferredSearchValue = useDeferredValue(searchValue);

	const { messages } = useMessages();

	useEffect(() => {
		startTransition(() => {
			setFilteredMessages(
				messagesAfterFilter(messages, searchMode, deferredSearchValue)
			);
		});
	}, [messages, searchMode, deferredSearchValue]);

	const MessagesList = () => {
		return (
			<>
				{filteredMessages.map(message => (
					<Message
						key={message.id}
						message={message}
					/>
				))}
			</>
		);
	};

	return {
		filteredMessages,
		MessagesList
	};
};

export default useMessagesContainer;
