import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

// avatar dropdown for desktop view

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
`;

const MenuUserName = styled.span`
    margin-right: 0.5rem;

    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.font_lg};
    font-weight: ${({ theme }) => theme.font_medium};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const MenuUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const DropdownButton = styled.button`
    padding: 0.5rem;
    border: none;

    background: transparent;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const ChevronIcon = styled(BsChevronDown)`
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.white};
`;

// burger menu for mobile view

const BurgerIcon = styled(FiAlignJustify)`
    position: fixed;
    top: 0.5rem;
    right: 20px;

    width: 50px;
    height: 50px;

    color: ${({ theme }) => theme.white};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        top: 0;
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
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton
};