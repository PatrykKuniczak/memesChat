import { startTransition, useEffect, useState } from "react";
import useMessagesFilter from "components/messages/hooks/useMessagesFilter";
import Message, { IMessage } from "../../message/Message";
import useMessages from "components/messages/hooks/useMessages";

export type TMessages = IMessage[];

const useMessagesContainer = () => {
    const [filteredMessages, setFilteredMessages] = useState<TMessages>([]);

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
