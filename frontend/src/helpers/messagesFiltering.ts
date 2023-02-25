import { TMessages } from "components/messages/hooks/useMessagesContainer";

export const messagesAfterFilter = (
	messages: TMessages,
	searchMode: string,
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
