import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
    Message,
    MessageAuthor,
    MessageContainer,
    MessageSettings
} from "./Home.styled";
import user from "../../assets/user.jpg";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

interface MessagesProps {
    filteredMessages: { id: string; message: string; author: string }[];
    selected: string;
    messages: { id: string; message: string; author: string }[];
    handleSetFilteredMessages: Dispatch<
        SetStateAction<{ id: string; message: string; author: string }[]>
    >;
    handleSetSelected: (id: string) => void;
    handleSetEditMode: (mode: boolean) => void;
    chatInput: MutableRefObject<HTMLInputElement | null>;
}

const MessagesBox = ({
    filteredMessages,
    selected,
    messages,
    handleSetFilteredMessages,
    handleSetSelected,
    handleSetEditMode,
    chatInput
}: MessagesProps) => (
    <>
        {filteredMessages.map(({ id, message, author }) => (
            <MessageContainer>
                <MessageAuthor src={user} />
                <Message onClick={() => handleSetSelected(id)}>
                    {message}
                </Message>
                Author: {author}
                {selected === id && (
                    <MessageSettings>
                        <BsPencilSquare
                            onClick={() => {
                                handleSetEditMode(true);
                                chatInput.current!.value =
                                    messages.find(
                                        (message) => message.id === selected
                                    )?.message || "";
                            }}
                        />
                        <BsTrashFill
                            onClick={() =>
                                handleSetFilteredMessages(() =>
                                    messages.filter(({ id }) => id !== selected)
                                )
                            }
                        />
                    </MessageSettings>
                )}
            </MessageContainer>
        ))}
    </>
);

export default MessagesBox;
