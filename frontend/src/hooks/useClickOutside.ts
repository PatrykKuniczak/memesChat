import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

const useClickOutside = (func: () => void) => {
    const ref = useRef(null);
    useOnClickOutside(ref, func);

    return { ref };
};

export default useClickOutside;
