import styled from "styled-components";

const UserContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;

	padding: 1.5rem;
	border-radius: 5px;

	&:nth-child(odd) {
		background: rgba(22, 22, 22, 0.4);
		backdrop-filter: blur(27px);
	}

	@media (max-width: ${({ theme }) => theme.media_md}) {
		padding: 0.5rem;
	}

	@media (max-width: ${({ theme }) => theme.media_sm}) {
		padding: 0.2rem;
	}
`;

const UserImage = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;

	object-fit: cover;

	@media (max-width: ${({ theme }) => theme.media_md}) {
		width: 40px;
		height: 40px;
	}

	@media (max-width: ${({ theme }) => theme.media_sm}) {
		width: 30px;
		height: 30px;
	}
`;

const UserName = styled.p`
	color: ${({ theme }) => theme.white};

	font-size: ${({ theme }) => theme.font_md};
	font-weight: ${({ theme }) => theme.font_medium};

	@media (max-width: ${({ theme }) => theme.media_sm}) {
		font-size: ${({ theme }) => theme.font_sm};
	}
`;

export {UserContainer, UserImage, UserName};
