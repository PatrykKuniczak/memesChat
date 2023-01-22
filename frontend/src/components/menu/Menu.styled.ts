import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

// avatar dropdown for desktop view

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
    transition: opacity 5s;
`;

const ModalsWrapper = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem;
    transition: opacity 5s;
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

const TextInput = styled.input`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_semitransparent};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const SubmitButton = styled.button`
    padding: 0.5rem 2rem;
    border: 1px solid ${({ theme }) => theme.gray_500};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};

    font-size: ${({ theme }) => theme.font_sm};
    font-weight: ${({ theme }) => theme.font_regular};

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const ModalSpan = styled.span`
  white-space: nowrap;

  color: ${({ theme }) => theme.white};
`;

// burger menu for mobile view

const BurgerIcon = styled(FiAlignJustify)`
    position: relative;

    width: 50px;
    height: 50px;

    color: ${({ theme }) => theme.white};
`;

const BurgerButton = styled.button`
    width: 50px;
    height: 50px;

    border: none;

    background: transparent;

    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.media_md}) {
        display: none;
    }
`;

export {
    MenuWrapper,
    ModalsWrapper,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    TextInput,
    SubmitButton,
    ChevronIcon,
    BurgerIcon,
    BurgerButton,
    ModalSpan
};
