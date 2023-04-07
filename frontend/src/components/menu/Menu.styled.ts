import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

// avatar dropdown for desktop view

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
`;

const MenuProfileWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

const MenuProfileWrapperMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 250px;

    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0.5rem;

    background-color: hsl(270, 100%, 59%, 0.5);
`;

const MenuUserName = styled.span`
    margin-right: 0.5rem;

    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.font_xl};
    font-weight: ${({ theme }) => theme.font_medium};
`;

const MenuUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    cursor: pointer;
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
    position: absolute;
    top: 0.7rem;
    right: 20px;

    width: 50px;
    height: 50px;

    color: ${({ theme }) => theme.white};

    @media (max-width: ${({ theme }) => theme.media_sm}) {
        top: 0.25rem;
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
