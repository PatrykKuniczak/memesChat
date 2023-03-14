import styled from "styled-components";

const GifWidgetStyled = styled.div`
    position: absolute;
    right: 3rem;
    bottom: 7rem;

    width: 30rem;
    height: 35rem;
    background-color: #000000bb;

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

    width: 16rem;
    height: 3rem;
    padding: 0 1rem;
    margin: 1rem 1rem;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray_400};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2rem;
    box-shadow: 5px 10px 25px #000000bb;
`;

const GifList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    height: auto;
`;

const GifListImage = styled.img`
    width: 30%;
    height: 8rem;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
`;

const GifWidgetAtrtibutionSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    bottom: 7rem;

    position: fixed;
    width: 30rem;
    padding: 0.7rem 1rem;

    font-size: ${({ theme }) => theme.font_xs};

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray_400};

    cursor: default;
`;

const GiphyAttributionLogo = styled.img`
    width: 5rem;
`;

export {
    GifWidgetStyled,
    GifWidgetSearch,
    GifList,
    GifListImage,
    GifWidgetAtrtibutionSection,
    GiphyAttributionLogo
};
