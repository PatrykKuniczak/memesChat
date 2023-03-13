import styled from "styled-components";

const GifWidgetStyled = styled.div`
    position: absolute;
    right: 3rem;
    bottom: 8rem;

    width: 30rem;
    height: 35rem;
    padding: 1rem 0.5rem;
    background-color: black;

    box-shadow: 5px 10px 25px #000000bb;
    border-radius: 4px;
    overflow-y: auto;

    &::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background: ${({ theme }) => theme.primary};
	}
`;

const GifWidgetSearch = styled.input`
    all: unset;
    position: fixed;
    color: ${({ theme }) => theme.white};
    width: 16rem;
    height: 3rem;
    padding: 0 1rem;
    margin: 0rem 0.5rem 1rem;
    background-color: ${({ theme }) => theme.gray_400};
    box-shadow: 5px 10px 25px #000000bb;
`;

const GifList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin: 4rem 0 0 0;
    justify-content: center;
`;

const GifListImage = styled.img`
    width: 30%;
    height: 8rem;
    object-fit: cover;
    border-radius: 4px;
`;

export { GifWidgetStyled, GifWidgetSearch, GifList, GifListImage };
