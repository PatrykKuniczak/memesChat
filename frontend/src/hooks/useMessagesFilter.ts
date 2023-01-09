import {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useTransition
} from "react";

type Messages = { id: string; message: string; author: string }[];

interface Props {
    filteredMessages: Messages;
    searchMode: string;
    searchParams: URLSearchParams;
    handleSetFilteredMessages: Dispatch<SetStateAction<Messages>>;
}

const useMessagesFilter = ({
    filteredMessages,
    searchMode,
    searchParams,
    handleSetFilteredMessages
}: Props) => {
    const [isPending, startTransition] = useTransition();

    const filterMessages = useMemo(() => {
        return filteredMessages.filter(({ message, author }) => {
            let filter = searchParams.get("messagesFilter") || "";
            if (filter === "") {
                return true;
            }

            if (searchMode === "user") {
                return author.toLowerCase().startsWith(filter.toLowerCase());
            }

            return message.toLowerCase().includes(filter.toLowerCase());
        });
    }, [filteredMessages, searchMode, searchParams]);

    useEffect(() => {
        startTransition(() => {
            handleSetFilteredMessages(filterMessages);
        });
    }, [searchParams]);
};

export default useMessagesFilter;
