import DropdownMenu from "./dropdown/DropdownMenu";
import EditAccountModal from "./editName/EditAccountModal";
import DeleteAccountModal from "./accountDelete/DeleteAccountModal";
import useModals from "./useModals";
import { IModals } from "./modals.interfaces";
import { ModalsWrapper } from "./Modals.styled";
import DeleteAvatarModal from "./removeAvatar/DeleteAvatarModal";

const Modals = ({ showMenu, changeMenuVisible }: IModals) => {
	const { currentModal, hideModal, showModal } = useModals(changeMenuVisible);

	return (
		<ModalsWrapper>
			{showMenu && (
				<DropdownMenu
					showModal={showModal}
					changeMenuVisible={changeMenuVisible}
				/>
			)}

			{currentModal === "edit" && <EditAccountModal hideModal={hideModal} />}

			{currentModal === "deleteAvatar" && (
				<DeleteAvatarModal hideModal={hideModal} />
			)}

			{currentModal === "deleteAccount" && (
				<DeleteAccountModal hideModal={hideModal} />
			)}
		</ModalsWrapper>
	);
};

export default Modals;
