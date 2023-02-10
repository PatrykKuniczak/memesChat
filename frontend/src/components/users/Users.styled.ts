import styled from "styled-components";

const UsersContainer = styled.section`
	@media (max-width: ${({ theme }) => theme.media_sm}) {
		margin-top: 0.5rem;
	}
	@media (max-width: ${({ theme }) => theme.media_sm}) and (max-height: ${({
			theme
		}) => theme.media_sm}) {
		display: none;
	}
`;

const UsersListWrapper = styled.div`
	max-height: calc(100vh - 172px);
	margin-top: 0.5rem;
	padding: 0.5rem;
	overflow-y: auto;
	border-radius: 5px;

	background: ${({ theme }) => theme.gray_semitransparent};

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background: ${({ theme }) => theme.black};
	}

	@media (max-width: ${({ theme }) => theme.media_md}) {
		max-height: 200px;
	}

	@media (max-width: ${({ theme }) => theme.media_sm}) {
		padding: 0.5rem;
		height: 160px;
	}
`;

const Label = styled.p`
	color: ${({ theme }) => theme.gray_300};

	margin-top: 1rem;

	@media (max-width: ${({ theme }) => theme.media_sm}) {
		display: none;
	}
`;

export { UsersContainer, UsersListWrapper, Label };
