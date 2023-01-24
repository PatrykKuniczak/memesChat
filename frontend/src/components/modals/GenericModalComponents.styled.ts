import styled from "styled-components";

const ModalWrapper = styled.form`
	position: absolute;
	z-index: 2;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 2rem 4rem;
	border: 1px solid ${({ theme }) => theme.primary};
	border-radius: 0.5rem;

	color: ${({ theme }) => theme.white};
	background: ${({ theme }) => theme.gray_500};

	font-size: ${({ theme }) => theme.font_sm};
	font-weight: ${({ theme }) => theme.font_regular};

	@media (max-width: ${({ theme }) => theme.media_md}) {
		width: 90vw;
		padding: 3rem 1rem;
	}
`;

const ModalSpan = styled.span`
	white-space: nowrap;
	width: auto;

	color: ${({ theme }) => theme.white};
`;

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;

	padding: 2rem 2rem 0;
	border-radius: 0.5rem;

	white-space: nowrap;

	@media (max-width: ${({ theme }) => theme.media_md}) {
		flex-direction: column;
		padding: 2rem 0 0 0;
	}
`;

export {ModalWrapper, ModalSpan, ButtonsWrapper};