import dependlyComponentDisplay from "helpers/dependly-component-display";
import { SetStateAction, useDeferredValue, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Message, { IMessage } from "../message/Message";
import { messagesAfterFilter } from "helpers/messagesFiltering";
import { IMessagesContainer } from "./Messages";
import useToken from "hooks/useToken";
import { fetchAllMessages } from "services/MessagesService";

export type TMessages = IMessage[];

const UseMessages = ({ searchValue, searchMode }: IMessagesContainer) => {
    const [messages, setMessages] = useState<TMessages>([]);
    const [filteredMessages, setFilteredMessages] = useState<TMessages>([]);
    const deferredSearchValue = useDeferredValue(searchValue);

    const { userToken } = useToken();

    const { data, isLoading, error } = useQuery({
        queryKey: ["messages"],
        queryFn: fetchAllMessages,
        enabled: !!userToken
    });

    const handleSetMessages = (messages: SetStateAction<TMessages>) => {
        setMessages(messages);
    };

    const MessagesList = () => {
        const mappedFilteredMessages = filteredMessages.map(message => (
            <Message
                key={message.id}
                message={message}
            />
        ));

        return dependlyComponentDisplay({
            isLoading,
            error,
            data: mappedFilteredMessages
        });
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
