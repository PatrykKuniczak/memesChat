import { Dispatch, SetStateAction, useEffect, useTransition } from "react";

type Messages = { id: string; message: string; author: string }[];

interface Props {
    messages: Messages;
    searchMode: string;
    searchParams: URLSearchParams;
    setFilteredMessages: Dispatch<SetStateAction<Messages>>;
}

const useMessagesFilter = ({
    messages,
    searchMode,
    searchParams,
    setFilteredMessages
}: Props) => {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setFilteredMessages(filter);
    }, [searchParams]);

    const filter = () => {
        return messages.filter(({ message, author }) => {
            let filter = searchParams.get("messagesFilter") || "";
            if (filter === "") {
                return true;
            }

            if (searchMode === "user") {
                return author.toLowerCase().startsWith(filter.toLowerCase());
            }

            return message.toLowerCase().includes(filter.toLowerCase());
        });
    };

    const applyFilter = () => {
        startTransition(() => {
            setFilteredMessages(filter);
        });
    };

    return { applyFilter };
};

export default useMessagesFilter;
