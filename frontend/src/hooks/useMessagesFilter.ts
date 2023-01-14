import {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useTransition
} from "react";
import { useSearchParams } from "react-router-dom";

type Messages = { id: string; message: string; author: string }[];

interface Props {
    messages: Messages;
    searchMode: string;
    handleSetFilteredMessages: Dispatch<SetStateAction<Messages>>;
}

const useMessagesFilter = ({
    messages,
    searchMode,
    handleSetFilteredMessages
}: Props) => {
    const [isPending, startTransition] = useTransition();
    const [searchParams, setSearchParams] = useSearchParams();

    const filterMessages = useMemo(() => {
        return messages.filter(({ message, author }) => {
            const filter = searchParams.get("messagesFilter") || "";
            if (filter === "") {
                return true;
            }

            if (searchMode === "user") {
                return author.toLowerCase().startsWith(filter.toLowerCase());
            }

            return message.toLowerCase().includes(filter.toLowerCase());
        });
    }, [messages, searchMode, searchParams]);

    useEffect(() => {
        startTransition(() => handleSetFilteredMessages(filterMessages));
    }, [filterMessages, handleSetFilteredMessages, searchParams]);
};

export default useMessagesFilter;
