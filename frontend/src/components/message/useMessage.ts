import { KeyboardEvent, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { IMessage } from "./Message";

const useMessage = (message: IMessage) => {
    const { id, content, author } = message;

    const messageInput = useRef<HTMLInputElement>(null);
    const outsideRef = useRef<HTMLDivElement>(null);
    const currentMessageInput = messageInput.current!;

    const [currentMessage, setCurrentMessage] = useState("");
    const [inputIsOpen, setInputIsOpen] = useState(false);

    const sendRequest = () => {
        //TODO: implement
    };

    const showInputEdit = async () => {
        await setInputIsOpen(true);
        currentMessageInput.focus();
    };

    const closeInputEdit = () => setInputIsOpen(false);

    const messageHasChanged = () =>
        currentMessageInput.textContent !== currentMessage;

    const handleAcceptMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === "Escape") {
            closeInputEdit();

            if (messageHasChanged()) sendRequest();
        }
    };

    const handleEditMessage = () => {
        setCurrentMessage(currentMessageInput.textContent || "");

        if (messageHasChanged()) sendRequest();

        closeInputEdit();
    };

    const handleDeleteMessage = () => {
        // TODO: send request through WS
    };

    useOnClickOutside(outsideRef, closeInputEdit);

    return {
        messageInput,
        outsideRef,
        handleEditMessage,
        handleDeleteMessage,
        handleAcceptMessage,
        inputIsOpen,
        showInputEdit
    };
};
export default useMessage;
