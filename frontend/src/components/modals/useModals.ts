import useCloseByEsc from "hooks/useCloseByEsc";
import { useState } from "react";

const useModals = (changeMenuVisible: () => void) => {
    const [currentModal, setCurrentModal] = useState("");

    const hideModal = () => {
        setCurrentModal("");
    };

    const showModal = (modalName: string) => {
        setCurrentModal(modalName);
        changeMenuVisible();
    };

    useCloseByEsc(Boolean(currentModal), hideModal);

    return { currentModal, hideModal, showModal };
};

export default useModals;
