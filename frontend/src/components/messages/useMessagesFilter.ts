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
    const [searchParams] = useSearchParams();

    const filterMessages = useMemo(() => {
        return messages.filter(({ message, author }) => {
            const searchValue = searchParams.get("messagesFilter");
            if (searchValue === null) {
                return true;
            }

            if (searchParams.get("searchMode") === "user") {
                return author
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase());
            }

            return message.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [messages, searchParams]);

    useEffect(() => {
        startTransition(() => handleSetFilteredMessages(filterMessages));
    }, [filterMessages, handleSetFilteredMessages, searchParams]);
};

export default useMessagesFilter;
