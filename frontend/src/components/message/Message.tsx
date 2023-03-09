import {
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageContent,
    MessageError,
    MessageSettings,
    Wrapper
} from "./Message.styled";
import user from "assets/user.jpg";
import { BsPencilSquare, BsTrashFill, BsCheckLg } from "react-icons/bs";
import useMessage from "./useMessage";
import { FC } from "react";
import useOnHover from "./hooks/useOnHover";

export interface IMessage {
    id: string;
    author: string;
    content: string;
}

const Message: FC<{ message: IMessage }> = ({ message }) => {
    const { id, author, content } = message;
    const {
        formik,
        outsideRef,
        handleDeleteMessage,
        closeInputEditByEscape,
        inputIsOpen,
        showInputEdit,
        handleEditMessage
    } = useMessage(message);
    const { errors, handleSubmit, handleChange, values } = formik;
    const { isHovering, handleMouseOut, handleMouseOver } = useOnHover();

    return (
        <MessageContainer
            ref={outsideRef}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <MessageAuthorImage src={user} />
            <div>
                <Wrapper>
                    <MessageAuthor>{author}</MessageAuthor>
                    {errors.message && (
                        <MessageError>{errors.message}</MessageError>
                    )}
                </Wrapper>
                {inputIsOpen ? (
                    <form onSubmit={handleSubmit}>
                        <MessageContent
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={values.message}
                            onKeyDown={closeInputEditByEscape}
                            autoFocus
                        />
                    </form>
                ) : (
                    <MessageContent as="p">{values.message}</MessageContent>
                )}
            </div>
            {isHovering && (
                <MessageSettings>
                    {inputIsOpen ? (
                        <BsCheckLg
                            onClick={handleEditMessage}
                            cursor={"pointer"}
                        />
                    ) : (
                        <BsPencilSquare
                            onClick={showInputEdit}
                            cursor={"pointer"}
                        />
                    )}
                    <BsTrashFill
                        onClick={handleDeleteMessage}
                        cursor={"pointer"}
                    />
                </MessageSettings>
            )}
        </MessageContainer>
    );
};

export default Message;
