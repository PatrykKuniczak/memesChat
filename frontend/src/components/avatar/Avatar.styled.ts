import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 0.5rem;

    padding: 0.5rem;
`;

const Button = styled.button`
    all: unset;

    padding: 0.5rem;

    background: #ffffff00;

    cursor: pointer;
`;

const ChevronIcon = styled(BsChevronDown)`
    color: ${(props) => props.theme.gray_300};
`;

const DropdownWrapper = styled.div`
    position: relative;
    top: 1rem;
`;

const DropdownList = styled.ul`
    position: absolute;
    z-index: 2;
    right: 0;

    padding: 0.5rem;
    border: 2px solid #00000077;
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.gray_500};
    color: ${(props) => props.theme.gray_300};

    white-space: nowrap;
    list-style-type: none;
`;

const DropdownListItem = styled.li`
    position: relative;

    padding: 0.8rem;

    cursor: pointer;
`;

const EditNicknameModal = styled.div`
    position: absolute;
    z-index: 2;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 2rem;

    color: white;
    background: ${(props) => props.theme.gray_500};

    border: 2px solid #00000077;
    border-radius: 0.5rem;
`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid grey;
    border-radius: 0.2rem;

    color: white;
    background: #3b3b3b;

    cursor: pointer;
`;

const DeleteAccountModal = styled.div`
    position: absolute;
    z-index: 2;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 2px solid #00000077;
    border-radius: 0.5rem;

    color: white;
    background: ${(props) => props.theme.gray_500};
`;

const DeleteAccountModalButtons = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 2rem 0rem;
    border-radius: 0.5rem;

    color: white;
`;

const ButtonPrimary = styled.div`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.2rem;

    background: #6b3c33;

    cursor: pointer;
`;

const ButtonSecondary = styled.div`
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.2rem;

    background: #157350;

    cursor: pointer;
`;

const ModalBackgroundHandler = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    width: 100vw;
    height: 200%;
`;

export {
    AvatarWrapper,
    Button,
    DropdownWrapper,
    DropdownList,
    DropdownListItem,
    EditNicknameModal,
    Input,
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary,
    ChevronIcon,
    ModalBackgroundHandler
};
