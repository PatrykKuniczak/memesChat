import { SetStateAction, useState } from "react";
import { TMessages } from "./useMessagesContainer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const UseMessages = () => {
    const [messages, setMessages] = useState<TMessages>([]);

    const fetchAllMessages = async () => {
        const { data } = await axios.get("messages");
        return data;
    };

    const { isLoading, error } = useQuery({
        queryKey: ["messages"],
        queryFn: fetchAllMessages,
        onSuccess: setMessages
    });

    const handleSetMessages = (messages: SetStateAction<TMessages>) => {
        setMessages(messages);
    };

    return { messages, handleSetMessages, isLoading, error };
};

export default UseMessages;
