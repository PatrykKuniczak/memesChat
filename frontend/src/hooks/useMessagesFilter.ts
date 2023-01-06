import { Dispatch, SetStateAction, useEffect, useTransition } from "react";

interface Props {
    messages: { id: string; message: string; author: string }[];
    searchMode: string;
    searchParams: URLSearchParams;
    setFilteredMessages: Dispatch<
        SetStateAction<{ id: string; message: string; author: string }[]>
    >;
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

            return (
                message
                    .toLowerCase()
                    .split(" ")
                    .find((piece) =>
                        filter.toLowerCase().split(" ").includes(piece)
                    ) !== undefined
            );
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
