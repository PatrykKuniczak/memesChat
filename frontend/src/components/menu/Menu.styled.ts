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
    font-weight: ${({ theme }) => theme.font_bold};

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

const ModalSpan = styled.span`
    white-space: nowrap;

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

const ButtonPrimary = styled.button`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.gray_400};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};

    cursor: pointer;
`;

const ButtonSecondary = styled.button`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.gray_200};
    border-radius: 0.2rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_400};

    cursor: pointer;
`;

const MenuBackgroundHandler = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        display: flex;
        position: relative;
        z-index: 1;
        left: 0;
        top: 10%;

        width: 100vw;
        height: 100%;

        backdrop-filter: blur(3px);
    }
`;

const ModalBackgroundHandler = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100%;

    backdrop-filter: blur(3px);
`;

const ModalBackgroundHandlerClear = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100%;
`;

// burger menu for mobile view

const BurgerIcon = styled(FiAlignJustify)`
    position: relative;
    z-index: 3;

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
    ModalSpan,
    TextInput,
    SubmitButton,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    MenuBackgroundHandler,
    ModalBackgroundHandler,
    ModalBackgroundHandlerClear,
    BurgerIcon,
    BurgerButton
};
