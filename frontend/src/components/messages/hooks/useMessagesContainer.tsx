import { IMessagesContainer } from "components/messages/MessagesContainer";
import { startTransition, useDeferredValue, useEffect, useState } from "react";
import Message, { IMessage } from "../../message/Message";
import useMessages from "./useMessages";
import { messagesAfterFilter } from "helpers/messagesFiltering";
import { ErrorIndicator, LoadingIndicator } from "../../../assets/styles/theme";

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
        if (isLoading) {
            return <LoadingIndicator>Ładowanie...</LoadingIndicator>;
        }

        if (error) {
            return (
                <ErrorIndicator>
                    Wystąpił błąd podczas ładowania danych.
                </ErrorIndicator>
            );
        }

        return (
            <>
                {filteredMessages.map(message => (
                    <Message
                        key={message.id}
                        message={message}
                    />
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
