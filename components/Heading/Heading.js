import styled from "styled-components";
//import BackButton from "../../components/BackButton/BackButton";
//import Menu from "../../lib/icons/menu";
import ArrowBackIcon from "../../lib/icons/arraw_left";

const StyledButton = styled.button`
  border: none;
  width: 4rem;

  background-color: var(--rosehip-color);
`;

const Heading = styled.header`
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

export default function Head() {
  function handleGoBackPage() {
    window.history.back(-1);
  }
  return (
    <Heading>
      <StyledButton
        type="button"
        onClick={handleGoBackPage}
        aria-label="go back to the last page"
      >
        <span aria-label="go back to the last page">
          <ArrowBackIcon />
        </span>
      </StyledButton>
      <h1>Restaurants</h1>

      <StyledButton></StyledButton>
    </Heading>
  );
}
