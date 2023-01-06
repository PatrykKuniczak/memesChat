import styled from "styled-components";

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    gap: 6px;
    padding: 10px;
`;

const Button = styled.button`
    cursor: pointer;
    all: unset;
    background: #ffffff00;
    padding: 6px;
    cursor: pointer;
`;

const DropdownWrapper = styled.div`
    position: relative;
    top: 26px;
    right: 6px;
`;

const DropdownList = styled.ul`
    position: absolute;
    list-style-type: none;
    white-space: nowrap;
    background-color: ${(props) => props.theme.gray_500};
    border: transparent;
    outline: transparent;
    color: ${(props) => props.theme.gray_300};
    right: 0;
    padding: .5rem;
    border: 2px solid #00000077;
    border-radius: .5rem;
`;

const DropdownListItem = styled.li`
    position: relative;
    padding: .8rem;
    cursor: pointer;
`;

const EditNicknameModal = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 30%;
    left: 50%;
    align-items: center;
    padding: .8rem;
    color: white;
    background: ${(props) => props.theme.gray_500};
    padding: 1rem 2rem;
    border: 2px solid #00000077;
    border-radius: .5rem;
`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: white;
    background: #3b3b3b;
    border: none;
    border-radius: 3px;
`;

const DeleteAccountModal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 50%;
    align-items: center;
    padding: .8rem;
    color: white;
    background: ${(props) => props.theme.gray_500};
    padding: 2rem 2rem;
    border: 2px solid #00000077;
    border-radius: .5rem;
`

const DeleteAccountModalButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .8rem;
    color: white;
    padding: 1rem 2rem 0rem;
    border-radius: .5rem;
`

const ButtonPrimary = styled.div`
    background: #6b3c33;
    margin: 0 1rem;
    padding: .5rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
`

const ButtonSecondary = styled.div`
    background: #157350;
    margin: 0 1rem;
    padding: .5rem 1rem;
    border-radius: .2rem;
    cursor: pointer;
`

export { AvatarWrapper, Button, DropdownWrapper, DropdownList, DropdownListItem,EditNicknameModal, Input, DeleteAccountModal, DeleteAccountModalButtons, ButtonPrimary, ButtonSecondary }