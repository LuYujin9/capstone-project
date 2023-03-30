import styled from "styled-components";
import ArrowBackIcon from "../../public/icons/Chevron_left";
import LoginIcon from "../../public/icons/login";
import { useRouter } from "next/router";

export default function Heading({
  children,
  previousLevelUrl,
  isHideBackButton,
}) {
  const router = useRouter();

  /* if (!router.isReady) {
    return <p>loading</p>;
  } */

  function handleGoBackPage() {
    router.push(previousLevelUrl);
  }
  return (
    <StyledHeader>
      <StyledButton
        type="button"
        onClick={handleGoBackPage}
        aria-label="go back to the last page"
        isHideBackButton={isHideBackButton}
      >
        <ArrowBackIcon color={`var(--red-vine-color)`} />
      </StyledButton>
      <h1>{children}</h1>
      <StyledButton type="button" aria-label="log in" isShowButton={true}>
        <LoginIcon color={`var(--red-vine-color)`} />
      </StyledButton>
    </StyledHeader>
  );
}

const StyledButton = styled.button`
  border: none;
  width: 4rem;

  background-color: var(--rosehip-color);
  ${({ isHideBackButton }) => (isHideBackButton ? "visibility: hidden" : null)}
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
  color: #ba494b;
`;
