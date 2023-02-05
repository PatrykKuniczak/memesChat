import { useDeferredValue, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { TMessages } from "./useMessagesContainer";

const useMessagesFilter = (messages: TMessages) => {
    const [searchParams] = useSearchParams();
    const deferredValue = useDeferredValue(searchParams);

    const messagesAfterFilter = useMemo(() => {
        return messages.filter(({ content, author }) => {
            const searchValue = deferredValue.get("messagesFilter");
            if (searchValue === null) {
                return true;
            }

            if (deferredValue.get("searchMode") === "user") {
                return author
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase());
            }

            return content.toLowerCase().includes(searchValue.toLowerCase());
        });
    }, [messages, deferredValue]);

    return { deferredValue, messagesAfterFilter };
};

export default useMessagesFilter;
