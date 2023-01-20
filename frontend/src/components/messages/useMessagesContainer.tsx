import { SetStateAction, useCallback, useEffect, useState } from "react";
import useMessagesFilter from "components/messages/useMessagesFilter";
import Message from "../message/Message";
import useMessages from "components/messages/useMessages";

const useMessagesContainer = () => {
    const { messages, handleSetMessages } = useMessages();

    useEffect(() => {
        // TODO: implement WS listener
    }, []);

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
        handleSetFilteredMessages
    });

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
