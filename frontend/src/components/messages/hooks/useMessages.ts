import { SetStateAction, useEffect, useState } from "react";
import { TMessages } from "./useMessagesContainer";

const UseMessages = () => {
    const [messages, setMessages] = useState<TMessages>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/comments`);
            const json = await response.json();

            setMessages(
                json.comments.map(
                    (comment: {
                        id: string;
                        body: string;
                        user: { username: string };
                    }) => {
                        return {
                            id: comment.id,
                            content: comment.body,
                            author: comment.user.username
                        };
                    }
                )
            );
        };

        fetchData().catch(console.error);
    }, []);

    const handleSetMessages = (messages: SetStateAction<TMessages>) => {
        setMessages(messages);
    };

    return { messages, handleSetMessages };
};

export default UseMessages;
