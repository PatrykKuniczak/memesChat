import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import {
    EditAccountWrapper,
    OptionSeparator,
    OptionEditAccount,
    TextInput,
    OptionEditAvatar
} from "./EditAccountModal.styled";
import { ModalSpan } from "../Modals.styled";
import { PrimaryButton } from "../../buttons/Button.styled";

import useModalEditAccount from "./useModalEditAccount";

import { IModal } from "../modals.interfaces";

const EditAccountModal = ({ hideModal }: IModal) => {
    const { newUsername, handleNicknameChange, updateUsername } =
        useModalEditAccount(hideModal);

    const fileTypes = ["JPG", "PNG"];
    const [file, setFile] = useState(null);
    const handleChange = (file: any) => {
        setFile(file);
        // TODO: send image file to backend
        // TODO: retrieve new image and replace previous image
        // hideModal()
    };

    return (
        <>
            <EditAccountWrapper>
                <OptionEditAccount>
                    <ModalSpan>Twój nowy nick:</ModalSpan>
                    <TextInput
                        value={newUsername}
                        onChange={handleNicknameChange}
                    />
                    <PrimaryButton onClick={updateUsername}>
                        Zapisz
                    </PrimaryButton>
                </OptionEditAccount>
                <OptionSeparator />
                <OptionEditAvatar>
                    <ModalSpan>Nowy avatar:</ModalSpan>
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                        label="Kliknij aby dodać lub upuść nowy avatar. Pliki:"
                        multiple={false}
                        hoverTitle="Upuść aby dodać"
                        onTypeError={(err: (arg0: string) => void) =>
                            console.log(err)
                        }
                        maxSize={1}
                        onSizeError={(err: (arg0: string) => void) =>
                            console.log(err)
                        }
                        onDrop={(file: (arg0: File | Array<File>) => void) =>
                            console.log(file)
                        }
                        onSelect={(file: (arg0: File | Array<File>) => void) =>
                            console.log(file)
                        }
                        onDraggingStateChange={(
                            dragging: (dragging: boolean) => void
                        ) => console.log(dragging)}
                        dropMessageStyle={{ backgroundColor: "fuchsia" }}
                    />
                    <PrimaryButton onClick={handleChange}>Dodaj</PrimaryButton>
                </OptionEditAvatar>
            </EditAccountWrapper>
        </>
    );
};

export default EditAccountModal;
