import { useState } from "react";

const useOnHover = () => {
    const [isHovering, setIsHovering] = useState(false);

    const show = () => {
        setIsHovering(true);
    };

    const hide = () => {
        setIsHovering(false);
    };

    return { isHovering, show, hide };
};

export default useOnHover;
