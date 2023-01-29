import { useDeferredValue, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

type Messages = { id: string; message: string; author: string }[];

const useMessagesFilter = (messages: Messages) => {
    const [searchParams] = useSearchParams();
    const deferredValue = useDeferredValue(searchParams);

    const messagesAfterFilter = useMemo(() => {
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

    return { deferredValue, messagesAfterFilter };
};

export default useMessagesFilter;
