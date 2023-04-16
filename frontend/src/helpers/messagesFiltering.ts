import { TSearchMode } from "components/chat/useChat";
import { TMessages } from "components/messages/useMessages";

export const messagesAfterFilter = (
    messages: TMessages,
    searchMode: TSearchMode,
    searchValue: string | null
) => {
    return messages.filter(({ author, content }) => {
        if (searchValue === null) {
            return true;
        }

        if (searchMode === "user") {
            return author.username
                .toLowerCase()
                .startsWith(searchValue.toLowerCase());
        }

        return content.toLowerCase().includes(searchValue.toLowerCase());
    });
};
