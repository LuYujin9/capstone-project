import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 4rem auto;
  padding: 0;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;
