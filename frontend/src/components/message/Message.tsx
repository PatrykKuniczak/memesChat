import {
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageContent,
    MessageSettings
} from "./Message.styled";
import user from "assets/user.jpg";
import {
    BsPencilSquare,
    BsTrashFill,
    BsXSquare,
    BsCheckLg
} from "react-icons/bs";
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
        selected,
        messageInput,
        outsideRef,
        messageHasChanged,
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
                <MessageSettings ref={outsideRef}>
                    <>
                        {messageHasChanged() ? (
                            <BsPencilSquare onClick={handleEditMessage} />
                        ) : (
                            <BsCheckLg onClick={handleEditMessage} />
                        )}
                    </>
                    <BsTrashFill onClick={handleDeleteMessage} />
                    <BsXSquare onClick={() => handleSetSelected("")} />
                </MessageSettings>
            )}
        </MessageContainer>
    );
};

export default Message;
