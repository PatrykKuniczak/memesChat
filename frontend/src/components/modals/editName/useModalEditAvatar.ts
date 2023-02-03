import { useState } from "react";

const useModalEditAvatar = () => {
    const fileTypes = ["JPG", "PNG"];
    const [file, setFile] = useState(null);

    const handleChange = (file: File | any) => {
        setFile(file);
        // TODO: send image file to backend
        // TODO: retrieve new image and replace previous image
        // hideModal()
    };

    const onTypeError = (err: string) => {
        console.log(err);
    };

    const onSizeError = (err: string) => console.log(err);

    const onDrop = (file: File) => console.log(file);

    const onSelect = (file: File) => console.log(file);

    const onDraggingStateChange = (dragging: boolean) => console.log(dragging);

    const submitChanges = () => {
        // TODO: submit changes to backend:
        // handle name change
        // handle new avatar submitted
        // handle checkboxState === true
    };

    return {
        file,
        fileTypes,
        handleChange,
        onTypeError,
        onSizeError,
        onDrop,
        onSelect,
        onDraggingStateChange,
        submitChanges
    };
};

export default useModalEditAvatar;
