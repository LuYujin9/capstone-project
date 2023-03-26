import ArrowBack from "../../lib/icons/arraw_left";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: var(--rosehip-color);
`;

export default function BackButton() {
  function handleGoBackToLastPage() {
    window.history.go(-1);
  }
  return (
    <StyledButton type="button" onClick={handleGoBackToLastPage}>
      <span aria-label="go back to the last page">
        <ArrowBack />
      </span>
    </StyledButton>
  );
}
