import { useState } from "react";

const useOnHover = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return { isHovering, handleMouseOut, handleMouseOver };
};

export default useOnHover;
