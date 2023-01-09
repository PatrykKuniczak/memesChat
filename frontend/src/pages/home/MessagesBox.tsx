import { Dispatch, MutableRefObject, SetStateAction } from "react";
import {
    Message,
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageSettings
} from "./MessagesBox.styled";
import user from "assets/user.jpg";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

type Messages = { id: string; message: string; author: string }[];

interface MessagesProps {
    filteredMessages: Messages;
    selected: string;
    messages: Messages;
    handleSetMessages: Dispatch<SetStateAction<Messages>>;
    handleSetFilteredMessages: Dispatch<SetStateAction<Messages>>;
    handleSetSelected: (id: string) => void;
    handleSetEditMode: (mode: boolean) => void;
    chatInput: MutableRefObject<HTMLInputElement | null>;
}

const MessagesBox = ({
    filteredMessages,
    selected,
    messages,
    handleSetMessages,
    handleSetSelected,
    handleSetEditMode,
    chatInput
}: MessagesProps) => (
    <>
        {filteredMessages.map(({ id, message, author }) => (
            <MessageContainer key={id}>
                <MessageAuthorImage src={user} />
                <div>
                    <MessageAuthor>{author}</MessageAuthor>
                    <Message onClick={() => handleSetSelected(id)}>
                        {message}
                    </Message>
                </div>
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
                                handleSetMessages(() =>
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
