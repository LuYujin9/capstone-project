import styled from "styled-components";
import useSWR from "swr";
import ReservesListItem from "../../../components/ReservesListItem";
import LoginModal from "../../../components/LoginModal";
import Heading from "../../../components/Heading";
import { useState } from "react";
import { StyledMain } from "../../../components/styles";

export default function Reserves({ username }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const { data: reserves, mutate } = useSWR("/api/reserves", {
    fallbackData: [],
  });
  const reversedReserves = reserves.slice().reverse();

  return (
    <>
      <Heading>Meine Reservierungen</Heading>
      <LoginModal
        isOpen={isLoginModalOpen}
        username={username}
        isHomepage={false}
        onClose={() => setIsLoginModalOpen(false)}
      />
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
