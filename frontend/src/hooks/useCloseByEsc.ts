import { useEffect } from "react";

const useCloseByEsc = (isOpen: boolean, close: () => void) => {
    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
        };

        if (isOpen) document.addEventListener("keydown", keyDownHandler);

        return () => document.removeEventListener("keydown", keyDownHandler);
    }, [isOpen, close]);
};

export default useCloseByEsc;
