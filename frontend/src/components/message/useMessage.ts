import { KeyboardEvent, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { IMessage } from "./Message";

const useMessage = (message: IMessage) => {
    const { id, content, author } = message;

    const messageInput = useRef<HTMLInputElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const currentMessageInput = messageInput.current!;

    const [currentMessage, setCurrentMessage] = useState(content);
    const [inputIsOpen, setInputIsOpen] = useState(false);

    const sendRequest = () => {
        //TODO: implement
    };

    const showInputEdit = async () => {
        await setInputIsOpen(true);
        currentMessageInput.focus();
    };

    const closeEditableInput = () => setInputIsOpen(false);

    const messageHasChanged = () =>
        currentMessageInput.textContent !== currentMessage;

    const handleMessageChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            closeEditableInput();

            if (messageHasChanged()) sendRequest();
        } else if (event.key === "Escape") {
            setCurrentMessage(content);
            closeEditableInput();
        }
    };

    const handleEditMessage = () => {
        setCurrentMessage(currentMessageInput.textContent || "");

        if (messageHasChanged()) sendRequest();

        closeEditableInput();
    };

    const handleDeleteMessage = () => {
        // TODO: send request through WS
    };

    useOnClickOutside(outsideRef, closeEditableInput);

    return {
        messageInput,
        outsideRef,
        handleEditMessage,
        handleDeleteMessage,
        handleMessageChange,
        inputIsOpen,
        showInputEdit,
        currentMessage
    };
};
export default useMessage;
