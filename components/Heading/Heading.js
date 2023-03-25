import styled from "styled-components";

const Heading = styled.section`
  width: 100vw;
  height: 4rem;
  margin: 0;

  text-align: center;
  position: fixed;
  top: 0;
  z-index: 1;

  background-color: var(--rosehip-color);
  color: white;
`;

export default function Head() {
  return (
    <Heading>
      <h1>Restaurants</h1>
    </Heading>
  );
}
