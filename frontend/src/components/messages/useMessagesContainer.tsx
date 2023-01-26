import { startTransition, useEffect, useState } from "react";
import useMessagesFilter from "components/messages/useMessagesFilter";
import Message from "../message/Message";
import useMessages from "components/messages/useMessages";

type Messages = { id: string; message: string; author: string }[];

const useMessagesContainer = () => {
    const [filteredMessages, setFilteredMessages] = useState<Messages>([]);

    const { messages } = useMessages();
    const { deferredValue, applyMessagesFilter } = useMessagesFilter(messages);

    useEffect(() => {
        startTransition(() => setFilteredMessages(applyMessagesFilter));
        // TODO: implement WS listener
    }, [applyMessagesFilter, messages, deferredValue]);

    const MessagesList = () => {
        return (
            <>
                {filteredMessages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </>
        );
    };

    return {
        filteredMessages,
        MessagesList
    };
};

export default useMessagesContainer;
