import styled from "styled-components";
import useSWR from "swr";
import ReservesListItem from "../../../components/ReservesListItem";
import Heading from "../../../components/Heading";
import { StyledMain } from "../../../components/styles";

export default function Reserves({ username, onLogin }) {
  const { data: reserves, mutate } = useSWR("/api/reserves", {
    fallbackData: [],
  });
  const matchingReserves = reserves.filter(
    (reserve) => reserve.username === username
  );
  const reversedReserves = matchingReserves.slice().reverse();

  if (!reserves) return <h2>Loading</h2>;
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Meine Reservierungen
      </Heading>
      <StyledMain>
        <StyledList role="list">
          {reversedReserves.map((reserve) => (
            <ReservesListItem
              key={reserve._id}
              reserve={reserve}
              mutateReserves={mutate}
            />
          ))}
        </StyledList>
      </StyledMain>
    </>
  );
}

const StyledList = styled.ul`
  margin: 0;
  margin-bottom: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
    padding: 1em;
  }
  @media only screen and (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1em;
  }
`;
