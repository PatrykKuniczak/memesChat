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
    handleSetFilteredMessages: Dispatch<SetStateAction<Messages>>;
}

const useMessagesFilter = ({ messages, handleSetFilteredMessages }: Props) => {
    const [isPending, startTransition] = useTransition();
    const [searchParams, setSearchParams] = useSearchParams();

    const filterMessages = useMemo(() => {
        return messages.filter(({ message, author }) => {
            const filter = searchParams.get("messagesFilter") || "";
            if (filter === "") {
                return true;
            }

            const searchMode = searchParams.get("searchMode") || "";
            if (searchMode === "user") {
                return author.toLowerCase().startsWith(filter.toLowerCase());
            }

            return message.toLowerCase().includes(filter.toLowerCase());
        });
    }, [messages, searchParams]);

    useEffect(() => {
        startTransition(() => handleSetFilteredMessages(filterMessages));
    }, [filterMessages, handleSetFilteredMessages, searchParams]);
};

export default useMessagesFilter;
