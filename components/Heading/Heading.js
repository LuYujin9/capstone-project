import styled from "styled-components";
import ArrowBackIcon from "../../public/icons/Chevron_left";
import LoginIcon from "../../public/icons/login";

export default function Heading({ children }) {
  function handleGoBackPage() {
    window.history.back(-1);
  }
  return (
    <StyledHeader>
      <StyledButton
        type="button"
        onClick={handleGoBackPage}
        aria-label="go back to the last page"
      >
        <ArrowBackIcon />
      </StyledButton>
      <h1>{children}</h1>

      <StyledButton type="button" aria-label="log in">
        <LoginIcon />
      </StyledButton>
    </StyledHeader>
  );
}

const StyledButton = styled.button`
  border: none;
  width: 4rem;

  background-color: var(--rosehip-color);
`;

const StyledHeader = styled.header`
  width: 100vw;
  height: 4rem;
  margin: 0;

  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--rosehip-color);
  color: white;
`;
