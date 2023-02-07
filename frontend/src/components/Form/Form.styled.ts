import styled from "styled-components";

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 2.5rem;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 4rem;
	text-align: center;

	@media screen and (min-width: ${({ theme }) => theme.media_md}) {
		flex-direction: row;
		align-items: center;
	}
`;

export { FormWrapper, ButtonsContainer };