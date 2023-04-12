import { IMessagesContainer } from "components/messages/MessagesContainer";
import { startTransition, useDeferredValue, useEffect, useState } from "react";
import Message, { IMessage } from "../../message/Message";
import useMessages from "./useMessages";
import { messagesAfterFilter } from "helpers/messagesFiltering";

export type TMessages = IMessage[];

const useMessagesContainer = ({
    searchValue,
    searchMode
}: IMessagesContainer) => {
    const [filteredMessages, setFilteredMessages] = useState<TMessages>([]);
    const deferredSearchValue = useDeferredValue(searchValue);

    const { messages, isLoading, error } = useMessages();

    useEffect(() => {
        startTransition(() => {
            setFilteredMessages(
                messagesAfterFilter(messages, searchMode, deferredSearchValue)
            );
        });
    }, [messages, searchMode, deferredSearchValue]);

    const MessagesList = () => {
        return (
            <>
                {isLoading ? (
                    <p style={{ color: "whitesmoke", paddingTop: "1rem" }}>
                        Ładowanie...
                    </p>
                ) : error ? (
                    <p style={{ color: "indianred", paddingTop: "1rem" }}>
                        Wystąpił błąd podczas ładowania danych.
                    </p>
                ) : (
                    filteredMessages.map(message => (
                        <Message
                            key={message.id}
                            message={message}
                        />
                    ))
                )}
            </>
        );
    };

    return {
        filteredMessages,
        MessagesList
    };
};

export default useMessagesContainer;
