import { startTransition, useEffect, useState } from "react";
import useMessagesFilter from "components/messages/hooks/useMessagesFilter";
import Message from "../../message/Message";
import useMessages from "components/messages/hooks/useMessages";

type Messages = { id: string; message: string; author: string }[];

const useMessagesContainer = () => {
    const [filteredMessages, setFilteredMessages] = useState<Messages>([]);

    const { messages } = useMessages();
    const { deferredValue, messagesAfterFilter } = useMessagesFilter(messages);

    useEffect(() => {
        startTransition(() => setFilteredMessages(messagesAfterFilter));
        // TODO: implement WS listener
    }, [messagesAfterFilter, messages, deferredValue]);

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
