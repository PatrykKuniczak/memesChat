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

    font-size: 1.25rem;
    font-weight: 500;

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

        font-size: 1.5rem;
        text-align: center;
    }
`;

const EditNameModal = styled.form`
    position: absolute;
    z-index: 2;
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 1rem;
    align-items: center;

    padding: 3rem 4rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.gray_500};

    font-size: 1rem;
    font-weight: 300;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        flex-direction: column;
        width: 80vw;
        padding: 4rem 2rem;
    }
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

    font-size: 1rem;
    font-weight: 300;

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

    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 100%;
        padding: 1rem;
    }
`;

const DeleteAccountModal = styled.div`
    position: absolute;
    z-index: 2;
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 3rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.5rem;

    font-weight: 300;

    background: ${({ theme }) => theme.gray_500};

    @media (max-width: ${({ theme }) => theme.media_md}) {
        width: 90vw;
        padding: 3rem 1rem;
    }
`;

const DeleteAccountModalButtons = styled.div`
    display: flex;
    align-items: center;

    padding: 2rem 2rem 0;
    border-radius: 0.5rem;

    white-space: nowrap;

    @media (max-width: ${({ theme }) => theme.media_md}) {
        padding: 2rem 0 0 0;
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
    DropdownWrapper,
    DropdownList,
    DropdownListItem,
    ModalSpan,
    EditNameModal,
    TextInput,
    SubmitButton,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    MenuBackgroundHandler,
    ModalBackgroundHandler,
    ModalBackgroundHandlerClear,
    BurgerIcon,
    BurgerButton
};
