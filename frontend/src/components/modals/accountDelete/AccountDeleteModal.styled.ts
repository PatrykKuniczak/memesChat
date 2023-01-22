import styled from "styled-components";

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

  font-weight: ${({ theme }) => theme.font_regular};

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

export {
    DeleteAccountModal,
    DeleteAccountModalButtons,
    ButtonPrimary,
    ButtonSecondary
};
