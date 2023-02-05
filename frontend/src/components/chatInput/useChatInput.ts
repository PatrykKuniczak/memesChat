import { ChangeEvent, FormEvent, useState } from "react";

const useChatInput = () => {
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
        }
    };

    return {
        currentInputValue,
        handleSetCurrentInputValue,
        handleSubmit
    };
};

export default useChatInput;
