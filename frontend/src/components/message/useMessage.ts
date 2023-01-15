import { KeyboardEvent, useRef, useState } from "react";
import { deleteMessage, updateMessage } from "store/slices/ChatSlice";
import { useAppDispatch } from "hooks/reduxHooks";

const useMessage = () => {
    const [selected, setSelected] = useState("");
    const [currentMessage, setCurrentMessage] = useState("");
    const messageInput = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();

    const handleSetCurrentMessage = (event: any) => {
        setCurrentMessage(event.currentTarget.textContent);
    };

    const handleAcceptMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") {
            return;
        }

        dispatch(
            updateMessage({
                selected: selected,
                message: currentMessage
            })
        );

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
        dispatch(deleteMessage(selected));
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
