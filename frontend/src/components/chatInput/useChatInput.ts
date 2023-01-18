import { ChangeEvent, FormEvent, useRef, useState } from "react";

const useChatInput = () => {
    const chatInput = useRef<HTMLInputElement | null>(null);
    const [currentInputValue, setCurrentInputValue] = useState("");

    const handleSetCurrentInputValue = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentInputValue(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (currentInputValue) {
            // TODO: send request through WS
            setCurrentInputValue("");
            chatInput.current!.value = "";
        }
    };

    return {
        chatInput,
        handleSetCurrentInputValue,
        handleSubmit
    };
};

export default useChatInput;
