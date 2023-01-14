import {
    Message,
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageSettings
} from "./MessagesBox.styled";
import user from "assets/user.jpg";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import useMessagesBox from "./useMessagesBox";

const MessagesBox = () => {
    const {
        filteredMessages,
        selected,
        handleSetSelected,
        handleSetEditMode,
        handleDeleteMessage
    } = useMessagesBox();

    return (
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
};

export default MessagesBox;
