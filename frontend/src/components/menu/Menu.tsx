import {
	MenuWrapper,
	MenuUserName,
	MenuUserImage,
	DropdownButton,
	ChevronIcon,
	BurgerIcon,
	BurgerButton
} from "./Menu.styled";
import { useMenu } from "./useMenu";
import Modals from "../modals/Modals";
import user from "assets/user.jpg";

const Menu = () => {
	const { username, showMenu, changeMenuVisible } = useMenu();

	return (
		<>
			<MenuWrapper>
				<MenuUserName>{username}</MenuUserName>
				<MenuUserImage
					src={user}
					onClick={changeMenuVisible}
				/>
				<>
					<DropdownButton onClick={changeMenuVisible}>
						<ChevronIcon />
					</DropdownButton>
					<BurgerButton onClick={changeMenuVisible}>
						<BurgerIcon />
					</BurgerButton>
				</>
			</MenuWrapper>

			<Modals
				showMenu={showMenu}
				changeMenuVisible={changeMenuVisible}
			/>
		</>
	);
};

export default Menu;
