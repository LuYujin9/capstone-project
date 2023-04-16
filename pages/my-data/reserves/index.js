import styled from "styled-components";
import useSWR from "swr";
import ReservesListItem from "../../../components/ReservesListItem";
import Heading from "../../../components/Heading";
import { StyledMain } from "../../../components/styles";

export default function Reserves({ username, onLogin }) {
  const { data: reserves, mutate } = useSWR("/api/reserves", {
    fallbackData: [],
  });
  const matchedReserves = reserves.filter(
    (reserve) => reserve.username === username
  );
  const reversedReserves = matchedReserves.slice().reverse();

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
  width: 100%;
  min-height: 100vh;

  background-color: var(--white-color);
`;
