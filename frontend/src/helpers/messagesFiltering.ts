import { TSearchMode } from "components/chat/useChat";
import { TMessages } from "components/messages/hooks/useMessagesContainer";

export const messagesAfterFilter = (
	messages: TMessages,
	searchMode: TSearchMode,
	searchValue: string
) => {
	return messages.filter(({ author, content }) => {
		if (searchValue === null) {
			return true;
		}

		if (searchMode === "user") {
			return author.toLowerCase().startsWith(searchValue.toLowerCase());
		}

		return content.toLowerCase().includes(searchValue.toLowerCase());
	});
};