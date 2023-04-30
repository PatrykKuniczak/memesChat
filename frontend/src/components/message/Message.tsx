import {
    MessageAuthor,
    MessageAuthorImage,
    MessageAuthorWrapper,
    MessageContainer,
    MessageContent,
    MessageContentWrapper,
    MessageError,
    MessageInput,
    MessageSettings,
    MessageSettingsWrapper
} from "./Message.styled";
import defaultUserAvatar from "assets/defaultUserAvatar.png";
import { BsPencilSquare, BsTrashFill, BsCheckLg } from "react-icons/bs";
import useMessage from "./useMessage";
import { FC } from "react";
import useOnHover from "./hooks/useOnHover";
import DeleteMessageModal from "./DeleteMessageModal/DeleteMessageModal";
import useAvatar from "hooks/useAvatar";

export interface IMessage {
    id: string;
    content: string;
    isImage: boolean;
    author: {
        id: number;
        username: string;
        userAvatar: { id: number; sourcePath: string };
    };
}

const Message: FC<{ message: IMessage }> = ({ message }) => {
    const { author } = message;

    const { isHovering, hide, show } = useOnHover();

    const {
        inputKeyDownHandler,
        handleSubmitForm,
        formik,
        ref,
        handleDeleteMessage,
        inputIsOpen,
        showInputEdit,
        modalIsOpen,
        showModal,
        closeModal
    } = useMessage(message, hide);

    const avatarUrl = useAvatar(author?.userAvatar);

    const { errors, handleChange, values } = formik;

    return (
        <>
            <MessageContainer
                onMouseOver={show}
                onMouseOut={hide}>
                <div>
                    <MessageAuthorWrapper>
                        <MessageAuthorImage
                            src={avatarUrl || defaultUserAvatar}
                            alt="user"
                        />
                        <MessageAuthor>
                            {author?.username || "Konto usunięte"}
                        </MessageAuthor>
                    </MessageAuthorWrapper>
                    <MessageContentWrapper ref={ref}>
                        {inputIsOpen ? (
                            <form onSubmit={handleSubmitForm}>
                                <MessageInput
                                    id="content"
                                    name="content"
                                    onChange={handleChange}
                                    value={values.content}
                                    onKeyDown={inputKeyDownHandler}
                                    autoComplete="off"
                                    autoFocus
                                />
                                {errors.content && (
                                    <MessageError>
                                        {errors.content}
                                    </MessageError>
                                )}
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
