import { SetStateAction, useDeferredValue, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ErrorIndicator, LoadingIndicator } from "assets/styles/theme";
import Message, { IMessage } from "../message/Message";
import { messagesAfterFilter } from "helpers/messagesFiltering";
import { IMessagesContainer } from "./Messages";
import useToken from "hooks/useToken";

export type TMessages = IMessage[];

const UseMessages = ({ searchValue, searchMode }: IMessagesContainer) => {
    const [messages, setMessages] = useState<TMessages>([]);
    const [filteredMessages, setFilteredMessages] = useState<TMessages>([]);
    const deferredSearchValue = useDeferredValue(searchValue);

    const { userToken } = useToken();

    const fetchAllMessages = async () => {
        const { data } = await axios.get("messages");
        return data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ["messages"],
        queryFn: fetchAllMessages,
        enabled: !!userToken
    });

    const handleSetMessages = (messages: SetStateAction<TMessages>) => {
        setMessages(messages);
    };

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

    useEffect(() => {
        setFilteredMessages(
            messagesAfterFilter(messages, searchMode, deferredSearchValue)
        );
    }, [messages, searchMode, deferredSearchValue]);

    useEffect(() => {
        data && setMessages(data);
    }, [data]);

    return { messages, handleSetMessages, MessagesList };
};

export default UseMessages;
