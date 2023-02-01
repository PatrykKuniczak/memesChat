import { KeyboardEvent, useEffect, useRef, useState } from "react";

const useMessage = () => {
    const [selected, setSelected] = useState("");
    const [isBeingEdited, setBeingEdited] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const messageInput = useRef<HTMLInputElement>(null!);
    const outsideRef = useRef<HTMLInputElement>(null!);

    const input = messageInput.current;

    const sendRequest = () => {
        //TODO: implement
    };

    const messageHasChanged = () => input.textContent !== currentMessage;

    const handleAcceptMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === "Escape") {
            input.contentEditable = "false";

            if (messageHasChanged()) sendRequest();
        }
    };

    const handleEditMessage = () => {
        setCurrentMessage(input.textContent || "");

        if (input.contentEditable === "true") {
            input.contentEditable = "false";

            if (messageHasChanged()) {
                sendRequest();
            }
            return;
        }

        input.contentEditable = "true";
        input.focus();
    };

    const handleSetSelected = (id: string) => {
        setSelected(id);
        setBeingEdited(true);
    };

    const handleDeleteMessage = () => {
        // TODO: send request through WS
    };

    const handleHideEdit = () => {
        setBeingEdited((prevState) => !prevState);
    };

    useEffect(() => {
        const outsideRefHandler = (event: any) => {
            outsideRef.current !== null &&
                !outsideRef.current.contains(event.target) &&
                setBeingEdited(false);
        };
        document.addEventListener("mousedown", outsideRefHandler);

        return () => {
            document.removeEventListener("mousedown", outsideRefHandler);
        };
    }, []);

    return {
        selected,
        isBeingEdited,
        messageInput,
        outsideRef,
        messageHasChanged,
        handleHideEdit,
        handleSetSelected,
        handleEditMessage,
        handleDeleteMessage,
        handleAcceptMessage
    };
};

export default useMessage;
