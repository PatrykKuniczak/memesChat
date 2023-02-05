import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.gray_semitransparent};
  backdrop-filter: blur(5px);
`;

const DropdownList = styled.ul`
  position: relative;
  width: 100vw;
  top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border: none;
  outline: transparent;

  color: ${({ theme }) => theme.white};

  white-space: nowrap;
  list-style-type: none;
`;

const DropdownListItem = styled.li`
    display: block;
    position: relative;

    padding: 1rem;

    cursor: pointer;

    &:focus-visible {
        border: 1px solid ${({ theme }) => theme.primary};
        border-radius: 0.5rem;
    }

    &:hover {
        background-color: #16161699;
    }

    @media (max-width: ${({ theme }) => theme.media_md}) {
        padding: 1.5rem;

        font-size: ${({ theme }) => theme.font_lg};
        text-align: center;
    }
`;

export { DropdownWrapper, DropdownList, DropdownListItem };
