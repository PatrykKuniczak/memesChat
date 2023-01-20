import { SetStateAction, useEffect, useState } from "react";

const UseMessages = () => {
    const [messages, setMessages] = useState<
        { id: string; message: string; author: string }[]
    >([]);

    useEffect(() => {
        let ignore = true;

        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/comments`);
            const json = await response.json();

            if (ignore) {
                setMessages(
                    json.comments.map(
                        (comment: {
                            id: string;
                            body: string;
                            user: { username: string };
                        }) => {
                            return {
                                id: comment.id,
                                message: comment.body,
                                author: comment.user.username
                            };
                        }
                    )
                );
            }
        };

        fetchData().catch(console.error);

        return () => {
            ignore = false;
        };
    }, []);

    const handleSetMessages = (
        messages: SetStateAction<
            { id: string; message: string; author: string }[]
        >
    ) => {
        setMessages(messages);
    };

    return { messages, handleSetMessages };
};

export default UseMessages;
