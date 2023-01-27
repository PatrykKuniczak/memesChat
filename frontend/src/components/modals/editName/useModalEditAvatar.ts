import { useState } from "react";

const useModalEditAvatar = () => {
    const fileTypes = ["JPG", "PNG"];
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
        // TODO: send image file to backend
        // TODO: retrieve new image and replace previous image
        // hideModal()
    };

    const onTypeError = (err: (arg0: string) => void) => {
        console.log(err);
    };

    const onSizeError = (err: (arg0: string) => void) => console.log(err);

    const onDrop = (file: (arg0: File | Array<File>) => void) =>
        console.log(file);

    const onSelect = (file: (arg0: File | Array<File>) => void) =>
        console.log(file);

    const onDraggingStateChange = (dragging: (dragging: boolean) => void) =>
        console.log(dragging);

    return {
        fileTypes,
        file,
        setFile,
        handleChange,
        onTypeError,
        onSizeError,
        onDrop,
        onSelect,
        onDraggingStateChange
    };
};

export default useModalEditAvatar;
