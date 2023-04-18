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
import { IUser } from "../user/User";
import { useAppSelector } from "store/store";

export interface IMessage {
    id: number;
    content: string;
    isImage: boolean;
    author: IUser;
}

const Message: FC<{ message: IMessage }> = ({ message }) => {
    const { author } = message;

    const { isHovering, hide, show } = useOnHover();

    const { id } = useAppSelector(state => state.user);

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

    const avatarUrl = useAvatar(author?.userAvatar?.id);

    const { errors, handleChange, values } = formik;

    const isAuthor = message.author && message.author.id === id;

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
                            {((isHovering && isAuthor) || inputIsOpen) && (
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
