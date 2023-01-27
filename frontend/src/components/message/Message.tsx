import {
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageContent,
    MessageSettings
} from "./Message.styled";
import user from "assets/user.jpg";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import useMessage from "./useMessage";
import { FC } from "react";

interface IMessage {
    id: string;
    author: string;
    message: string;
}

const Message: FC<{ message: IMessage }> = (props) => {
    const { id, author, message } = props.message;

    const {
        messageInput,
        selected,
        handleSetSelected,
        handleEditMessage,
        handleDeleteMessage,
        handleAcceptMessage
    } = useMessage();

    return (
        <MessageContainer>
            <MessageAuthorImage src={user} />
            <div>
                <MessageAuthor>{author}</MessageAuthor>
                <MessageContent
                    onClick={() => handleSetSelected(id)}
                    ref={messageInput}
                    onKeyDown={handleAcceptMessage}
                >
                    {message}
                </MessageContent>
            </div>
            {selected === id && (
                <MessageSettings>
                    <BsPencilSquare onClick={handleEditMessage} />
                    <BsTrashFill onClick={handleDeleteMessage} />
                </MessageSettings>
            )}
        </MessageContainer>
    );
};

export default Message;
