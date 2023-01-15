import { SetStateAction, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { fetchMessages } from "store/slices/ChatSlice";
import useMessagesFilter from "hooks/useMessagesFilter";

const useMessagesBox = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    const messages = useAppSelector((state) => state.chat.messages);
    const searchMode = useAppSelector((state) => state.search.searchMode);

    const [filteredMessages, setFilteredMessages] = useState(messages);

    useEffect(() => {
        setFilteredMessages(messages);
    }, [messages]);

    const handleSetFilteredMessages = useCallback(
        (
            filteredMessages: SetStateAction<
                { id: string; message: string; author: string }[]
            >
        ) => {
            setFilteredMessages(filteredMessages);
        },
        []
    );

    useMessagesFilter({
        messages,
        searchMode,
        handleSetFilteredMessages
    });

    return {
        filteredMessages
    };
};

export default useMessagesBox;
