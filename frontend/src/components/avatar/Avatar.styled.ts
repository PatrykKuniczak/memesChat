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
    background: #ffffff00;
    padding: 0.5rem;
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
    list-style-type: none;
    white-space: nowrap;
    background-color: ${(props) => props.theme.gray_500};
    color: ${(props) => props.theme.gray_300};
    right: 0;
    padding: 0.5rem;
    border: 2px solid #00000077;
    border-radius: 0.5rem;
    z-index: 2;
`;

const DropdownListItem = styled.li`
    position: relative;
    padding: 0.8rem;
    cursor: pointer;
`;

const EditNicknameModal = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    color: white;
    background: ${(props) => props.theme.gray_500};
    padding: 1rem 2rem;
    border: 2px solid #00000077;
    border-radius: 0.5rem;
    z-index: 2;
`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: white;
    background: #3b3b3b;
    border: 1px solid grey;
    border-radius: 0.2rem;
    cursor: pointer;
`;

const DeleteAccountModal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    color: white;
    background: ${(props) => props.theme.gray_500};
    padding: 2rem;
    border: 2px solid #00000077;
    border-radius: 0.5rem;
    z-index: 2;
`;

const DeleteAccountModalButtons = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem 2rem 0rem;
    border-radius: 0.5rem;
`;

const ButtonPrimary = styled.div`
    background: #6b3c33;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.2rem;
    cursor: pointer;
`;

const ButtonSecondary = styled.div`
    background: #157350;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid black;
    border-radius: 0.2rem;
    cursor: pointer;
`;

const ModalBackgroundHandler = styled.div`
    position: fixed;
    // background: #ffaacc55;
    left: 0;
    top: 0;
    width: 100vw;
    height: 200%;
    z-index: 1;
`

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
