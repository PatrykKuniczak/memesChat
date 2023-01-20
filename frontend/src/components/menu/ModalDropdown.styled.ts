import styled from "styled-components";

const DropdownWrapper = styled.div`
    position: relative;
    top: 2rem;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        position: absolute;
        top: 0;
    }
`;

const DropdownList = styled.ul`
    position: absolute;
    z-index: 2;
    right: 0;

    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.white};

    white-space: nowrap;
    list-style-type: none;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        position: fixed;
        left: 0;
        padding: 10vh 0 0 0;

        height: 100vh;
        width: 100vw;
        border: none;

        background-color: ${({ theme }) => theme.gray_semitransparent};
        backdrop-filter: blur(5px);
    }
`;

const DropdownListItem = styled.li`
    position: relative;

    padding: 0.8rem;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        padding: 1.5rem;

        font-size: ${({ theme }) => theme.font_lg};
        text-align: center;
    }
`;

export { DropdownWrapper, DropdownList, DropdownListItem };
