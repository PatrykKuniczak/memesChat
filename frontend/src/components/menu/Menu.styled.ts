import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
`;

const MenuProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (width < ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const MenuProfileWrapperMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem 0.5rem;
    border-radius: 0.5rem;

    background-color: hsl(270, 100%, 59%, 0.5);

    @media (min-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const MenuUserName = styled.span`
    color: ${({ theme }) => theme.white};

    font-weight: ${({ theme }) => theme.font_medium};
    font-size: clamp(1vw, ${({ theme }) => theme.font_xl}, 2.4vw);

    @media (width < ${({ theme }) => theme.media_md}) {
        font-size: clamp(1vw, ${({ theme }) => theme.font_lg}, 5vw);
    }
`;

const MenuUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    cursor: pointer;
`;

const DropdownButton = styled.button`
    border: none;

    background: transparent;

    cursor: pointer;

    @media (width < ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const ChevronIcon = styled(BsChevronDown)`
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.white};
`;

const BurgerIcon = styled(FiAlignJustify)`
    position: absolute;
    top: 0.7rem;
    right: 20px;

    width: 50px;
    height: 50px;

    color: ${({ theme }) => theme.white};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        width: 40px;
        height: 40px;
    }
`;

const BurgerButton = styled.button`
    border: none;

    background: transparent;

    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

export {
    MenuWrapper,
    MenuProfileWrapper,
    MenuProfileWrapperMobile,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton
};
