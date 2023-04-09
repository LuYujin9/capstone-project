import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import ReserveForm from "../../../components/ReserveForm/ReserveForm.js";
import RemainingSeatsFilter from "../../../components/RemainingSeatsFilter/RemainingSeatsFilter";
import { useState } from "react";
import useSWR from "swr";

export default function Reseve({ onStoreReserveData }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(`/api/restaurants/${id}`);
  if (!isReady || isLoading || error) return <h2>Loading</h2>;

  function getRemainingSeats(dataForSearch) {
    const pairingInfo = restaurant.reserveInfos.find(
      (info) =>
        info.date === dataForSearch.date && info.time === dataForSearch.time
    );
    setRemainingSeats(
      pairingInfo ? pairingInfo.remainingSeats : restaurant.maxSeats
    );
    setDate(dataForSearch.date);
    setTime(dataForSearch.time);
  }

  return (
    <>
      <Heading>{restaurant.name}</Heading>
      <StyledContainer>
        <RemainingSeatsFilter
          restaurant={restaurant}
          getRemainingSeats={getRemainingSeats}
        />
        <h2>
          {!remainingSeats
            ? ""
            : `Es gibt noch ${remainingSeats}
        ${remainingSeats === 1 ? "Platz" : "Plätze"}.`}
        </h2>
        {date && time && (
          <ReserveForm
            restaurant={restaurant}
            remainingSeats={remainingSeats}
            date={date}
            time={time}
            onStoreReserveData={onStoreReserveData}
          />
        )}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  margin: 5rem auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 799px) {
    width: 100vw;
  }
  @media only screen and (min-width: 800px) {
    width: 640px;
  }
`;
