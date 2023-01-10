import { Dispatch, SetStateAction } from "react";
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
    handleDeleteMessage: () => void;
    handleSetFilteredMessages: Dispatch<SetStateAction<Messages>>;
    handleSetSelected: (id: string) => void;
    handleSetEditMode: () => void;
}

const MessagesBox = ({
    filteredMessages,
    selected,
    handleDeleteMessage,
    handleSetSelected,
    handleSetEditMode
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
                        <BsPencilSquare onClick={handleSetEditMode} />
                        <BsTrashFill onClick={handleDeleteMessage} />
                    </MessageSettings>
                )}
            </MessageContainer>
        ))}
    </>
);

export default MessagesBox;
