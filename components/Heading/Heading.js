import styled from "styled-components";
import BackButton from "../../components/BackButton/BackButton";
import Menu from "../../lib/icons/menu";

const Heading = styled.section`
  width: 100vw;
  height: 4rem;
  margin: 0;

  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  background-color: var(--rosehip-color);
  color: white;
`;

export default function Head() {
  return (
    <Heading>
      <BackButton />
      <h1>Restaurants</h1>

      <div></div>
    </Heading>
  );
}
