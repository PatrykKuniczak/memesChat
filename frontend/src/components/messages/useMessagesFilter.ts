import {
    Dispatch,
    SetStateAction,
    useDeferredValue,
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
    const deferredValue = useDeferredValue(searchParams);

    const filterMessages = useMemo(() => {
        return messages.filter(({ message, author }) => {
            const searchValue = deferredValue.get("messagesFilter");
            if (searchValue === null) {
                return true;
            }

            if (deferredValue.get("searchMode") === "user") {
                return author
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase());
            }

            return message.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [messages, deferredValue]);

    useEffect(() => {
        startTransition(() => handleSetFilteredMessages(filterMessages));
    }, [deferredValue, handleSetFilteredMessages, filterMessages]);
};

export default useMessagesFilter;
