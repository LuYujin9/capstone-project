import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import ReserveForm from "../../../components/ReserveForm/ReserveForm.js";
import RemainingSeatsFilter from "../../../components/RemainingSeatsFilter/RemainingSeatsFilter";
import { useState } from "react";

export default function Reseve({ onReserve }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const router = useRouter();
  if (!router.isReady) return;
  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);

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
      <Heading previousLevelUrl={`/restaurants/${id}`}>
        {restaurant.name}
      </Heading>
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
            onReserve={onReserve}
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
