import {
    MessageAuthor,
    MessageAuthorImage,
    MessageContainer,
    MessageContent,
    MessageContentWrapper,
    MessageError,
    MessageSettings,
    Wrapper
} from "./Message.styled";
import user from "assets/user.jpg";
import { BsPencilSquare, BsTrashFill, BsCheckLg } from "react-icons/bs";
import useMessage from "./useMessage";
import { FC } from "react";
import useOnHover from "./hooks/useOnHover";
import DeleteMessageModal from "./DeleteMessageModal/DeleteMessageModal";

export interface IMessage {
    id: string;
    author: string;
    content: string;
}

const Message: FC<{ message: IMessage }> = ({ message }) => {
    const { author } = message;
    const {
        handleSubmitForm,
        formik,
        outsideRef,
        handleDeleteMessage,
        closeInputEditByEscape,
        inputIsOpen,
        showInputEdit,
        modalIsOpen,
        showModal,
        closeModal
    } = useMessage(message);
    const { errors, handleChange, values } = formik;
    const { isHovering, handleMouseOut, handleMouseOver } = useOnHover();

    return (
        <>
            <MessageContainer
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                <MessageAuthorImage src={user} />
                <div>
                    <Wrapper>
                        <MessageAuthor>{author}</MessageAuthor>
                        {errors.content && (
                            <MessageError>{errors.content}</MessageError>
                        )}
                    </Wrapper>
                    <MessageContentWrapper ref={outsideRef}>
                        {inputIsOpen ? (
                            <form onSubmit={handleSubmitForm}>
                                <MessageContent
                                    type="text"
                                    id="content"
                                    name="content"
                                    onChange={handleChange}
                                    value={values.content}
                                    onKeyDown={closeInputEditByEscape}
                                    autoComplete="off"
                                    autoFocus
                                />
                            </form>
                        ) : (
                            <MessageContent as="p">
                                {values.content}
                            </MessageContent>
                        )}
                        {isHovering && (
                            <MessageSettings>
                                {inputIsOpen ? (
                                    <BsCheckLg
                                        onClick={handleSubmitForm}
                                        cursor={"pointer"}
                                    />
                                ) : (
                                    <BsPencilSquare
                                        onClick={showInputEdit}
                                        cursor={"pointer"}
                                    />
                                )}
                                <BsTrashFill
                                    onClick={showModal}
                                    cursor={"pointer"}
                                />
                            </MessageSettings>
                        )}
                    </MessageContentWrapper>
                </div>
            </MessageContainer>
            {modalIsOpen && (
                <DeleteMessageModal
                    closeModal={closeModal}
                    handleDeleteMessage={handleDeleteMessage}
                />
            )}
        </>
    );
};

export default Message;
