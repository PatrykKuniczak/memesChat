import { KeyboardEvent, useRef, useState } from "react";

const useMessage = () => {
    const [selected, setSelected] = useState("");
    const [isEditing, setEditing] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const messageInput = useRef<HTMLInputElement>(null!);

    const input = messageInput.current;

    const sendRequest = () => {
        //TODO: implement
    };

    const messageHasChanged = () => input.textContent !== currentMessage;

    const handleAcceptMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!(event.key === "Enter" || event.key === "Escape")) {
            return;
        }

        input.contentEditable = "false";

        if (messageHasChanged()) {
            sendRequest();
        }

        setEditing(false);
    };

    const handleEditMessage = () => {
        setCurrentMessage(input.textContent || "");

        if (isEditing) {
            input.contentEditable = "false";
            setEditing(false);

            if (messageHasChanged()) {
                sendRequest();
            }
            return;
        }

        input.contentEditable = "true";
        input.focus();
        setEditing(true);
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
        handleAcceptMessage
    };
};

export default useMessage;
