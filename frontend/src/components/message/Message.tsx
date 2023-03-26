import {
    MessageAuthor,
    MessageAuthorImage,
    MessageAuthorWrapper,
    MessageContainer,
    MessageContent,
    MessageContentWrapper,
    MessageError,
    MessageSettings,
    MessageSettingsWrapper
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
    const { isHovering, hide, show } = useOnHover();
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
    } = useMessage(message, hide);
    const { errors, handleChange, values } = formik;

    return (
        <>
            <MessageContainer
                onMouseOver={show}
                onMouseOut={hide}>
                <div>
                    <MessageAuthorWrapper>
                        <MessageAuthorImage src={user} />
                        <MessageAuthor>{author}</MessageAuthor>
                        {errors.content && (
                            <MessageError>{errors.content}</MessageError>
                        )}
                    </MessageAuthorWrapper>
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
                        <MessageSettingsWrapper>
                            {(isHovering || inputIsOpen) && (
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
                        </MessageSettingsWrapper>
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
