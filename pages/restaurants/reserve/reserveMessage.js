import Heading from "../../../components/Heading/Heading";
import styled from "styled-components";

export default function reserveMessage({ reserveMessege }) {
  return (
    <>
      <Heading>Reservieren</Heading>
      <StyledParagraph>{reserveMessege}</StyledParagraph>
    </>
  );
}

const StyledParagraph = styled.h2`
  margin: 6rem 10%;
  width: 80%;
  font-size: 1.3rem;
  text-align: justify;
`;
