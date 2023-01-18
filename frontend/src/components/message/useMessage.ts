import { KeyboardEvent, useRef, useState } from "react";

const useMessage = () => {
    const [selected, setSelected] = useState("");
    const [currentMessage, setCurrentMessage] = useState("");
    const messageInput = useRef<HTMLInputElement | null>(null);

    const handleSetCurrentMessage = (event: any) => {
        setCurrentMessage(event.currentTarget.textContent);
    };

    const handleAcceptMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") {
            return;
        }

        // TODO: send request through WS

        messageInput.current!.contentEditable = "false";
    };

    const handleEditMessage = () => {
        const input = messageInput.current;

        input!.contentEditable = "true";
        input!.focus();
    };

    const handleSetSelected = (id: string) => {
        setSelected(id);
    };

    const handleDeleteMessage = () => {
        // TODO: send request through WS
    };

    return {
        messageInput,
        selected,
        handleSetSelected,
        handleEditMessage,
        handleDeleteMessage,
        handleAcceptMessage,
        handleSetCurrentMessage
    };
};

export default useMessage;
