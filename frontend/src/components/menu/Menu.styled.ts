import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";

// avatar dropdown for desktop view

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 0.5rem;

    padding: 0.5rem;
    transition: opacity 5s;
`;

const MenuUserName = styled.span`
    color: #fff;

    font-size: 1.25rem;
    font-weight: 500;

    @media (max-width: 50em) {
        display: none;
    }
`;

const MenuUserImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    object-fit: cover;

    @media (max-width: 50em) {
        display: none;
    }
`;

const DropdownButton = styled.button`
    padding: 0.5rem;
    border: none;

    background: transparent;

    cursor: pointer;

    @media (max-width: 50em) {
        display: none;
    }
`;

const ChevronIcon = styled(BsChevronDown)`
    color: ${(props) => props.theme.gray_300};
`;

const DropdownWrapper = styled.div`
    position: relative;
    top: 4rem;
`;

const DropdownList = styled.ul`
    position: absolute;
    z-index: 2;
    right: 0;

    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme.gray_300};
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.gray_500};
    color: ${(props) => props.theme.gray_300};

    white-space: nowrap;
    list-style-type: none;

    @media (max-width: 50em) {
        position: fixed;
        top: 5rem;
        left: 0;

        height: 100vh;
        width: 100vw;
        border: none;

        background-color: ${(props) => props.theme.gray_semitransparent};
        backdrop-filter: blur(5px);
    }
`;

const DropdownListItem = styled.li`
    position: relative;

    padding: 0.8rem;

    cursor: pointer;

    @media (max-width: 50em) {
        padding: 1.5rem;

        font-size: 1.5rem;
        text-align: center;
    }
`;

const EditNicknameModal = styled.div`
    position: absolute;
    z-index: 2;
    top: 30vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 3rem 4rem;
    border: 1px solid ${(props) => props.theme.gray_300};
    border-radius: 0.5rem;

    color: white;
    background: ${(props) => props.theme.gray_500};

    font-size: 1rem;
    font-weight: 300;

    @media (max-width: 50em) {
        flex-direction: column;
        width: 80vw;
        padding: 4rem 2rem;
    }
`;

const TextInput = styled.input`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.gray_300};
    border-radius: 0.2rem;

    color: white;
    background: ${(props) => props.theme.gray_semitransparent};

    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;

    @media (max-width: 50em) {
        width: 100%;
        padding: 1rem;
    }
`;

const SubmitButton = styled.input`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.gray_500};
    border-radius: 0.2rem;

    color: white;
    background: ${(props) => props.theme.primary};

    font-size: 1rem;
    font-weight: 300;

    cursor: pointer;

    @media (max-width: 50em) {
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
    padding: 3rem 4rem;
    border: 1px solid ${(props) => props.theme.gray_300};
    border-radius: 0.5rem;

    font-size: 1rem;
    font-weight: 300;

    color: white;
    background: ${(props) => props.theme.gray_500};

    @media (max-width: 50em) {
        width: 90vw;
        padding: 3rem 1rem;
    }
`;

const DeleteAccountModalButtons = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 2rem 0rem;
    border-radius: 0.5rem;

    color: white;

    @media (max-width: 50em) {
        padding: 2rem 0 0 0;
    }
`;

const ButtonPrimary = styled.div`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid ${(props) => props.theme.gray_500};
    border-radius: 0.2rem;

    background: ${(props) => props.theme.primary};

    cursor: pointer;
`;

const ButtonSecondary = styled.div`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.2rem;

    background: ${(props) => props.theme.gray_400};

    cursor: pointer;
`;

const ModalBackgroundHandler = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    width: 100vw;
    height: 200%;

    // background-color: ${(props) => props.theme.gray_semitransparent};
    // backdrop-filter: blur(2px);
`;

// burger menu for mobile view

const BurgerIcon = styled(FiAlignJustify)`
    width: 50px;
    height: 50px;

    color: ${(props) => props.theme.gray_300};
`;

const BurgerButton = styled.button`
    width: 50px;
    height: 50px;

    border: none;

    background: transparent;

    cursor: pointer;

    @media (min-width: 50em) {
        display: none;
    }
`;

export {
    MenuWrapper,
    MenuUserName,
    MenuUserImage,
    DropdownButton,
    DropdownWrapper,
    DropdownList,
    DropdownListItem,
    EditNicknameModal,
    TextInput,
    SubmitButton,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    ModalBackgroundHandler,
    BurgerIcon,
    BurgerButton
};
