import {
	MessageAuthor,
	MessageAuthorImage,
	MessageContainer,
	MessageContent,
	MessageSettings
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
		messageInput,
		outsideRef,
		handleEditMessage,
		handleDeleteMessage,
		handleMessageChange,
		inputIsOpen,
		showInputEdit,
		currentMessage
	} = useMessage(message);

	const { isHovering, handleMouseOut, handleMouseOver } = useOnHover();

	return (
		<MessageContainer
			ref={outsideRef}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<MessageAuthorImage src={user} />
			<div>
				<MessageAuthor>{author}</MessageAuthor>
				<MessageContent
					ref={messageInput}
					onKeyDown={handleMessageChange}
					contentEditable={inputIsOpen}
					suppressContentEditableWarning={true}>
					{currentMessage}
				</MessageContent>
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
