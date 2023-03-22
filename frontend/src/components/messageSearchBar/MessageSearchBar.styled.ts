import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`;

const SearchTypeSwitcher = styled.button`
    position: relative;

    padding: 1rem;
    margin-right: 1rem;
    width: 8rem;
    border: transparent;
    border-radius: 5px;
    outline: transparent;

    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.gray_300};

    font-size: ${({ theme }) => theme.font_sm};
    text-transform: capitalize;

    cursor: pointer;

    &::after {
        position: absolute;
        bottom: -40px;
        left: 50%;

        padding: 0.5rem;
        border-radius: 5px;

        background: ${({ theme }) => theme.gray_300};
        color: ${({ theme }) => theme.white};

        font-size: ${({ theme }) => theme.font_xs};

        content: "Wyszukaj wiadomość lub użytkownika";
        opacity: 0;
        transform: translate(-50%);
        transition: opacity 0.2s;
        white-space: nowrap;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        padding: 0.7rem;
    }
`;

export { SearchContainer, SearchTypeSwitcher };
