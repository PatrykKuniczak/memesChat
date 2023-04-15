import { scrollBar } from "assets/styles/theme";
import styled from "styled-components";

const GifWidgetWrapper = styled.div`
    position: absolute;
    z-index: 1;
    right: 3rem;
    bottom: 7rem;

    display: grid;
    grid-template-rows: 70px 1fr 30px;
    gap: 0.5rem;

    width: clamp(18rem, 30rem, 70%);
    height: clamp(18rem, 35rem, 40%);

    border-radius: 4px;

    background-color: #000000bb;
    box-shadow: 5px 10px 25px #000000bb;

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        right: 1rem;
        bottom: 4rem;
    }
`;

const GifWidgetSearch = styled.input`
    padding: 0.5rem;
    margin: 1rem;

    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray_400};
    box-shadow: 5px 10px 25px #000000bb;

    font-size: ${({ theme }) => theme.font_md};
`;

const GifList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1rem;

    padding-inline: 1rem;

    ${scrollBar}
`;

const GifListImage = styled.img`
    width: 100%;
    height: 100%;

    border-radius: 4px;
    object-fit: cover;

    cursor: pointer;
`;

const GifWidgetFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding-inline: 0.5rem;

    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray_400};

    font-size: ${({ theme }) => theme.font_xs};
`;

export {
    GifWidgetWrapper,
    GifWidgetSearch,
    GifList,
    GifListImage,
    GifWidgetFooter
};
