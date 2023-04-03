import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import ReserveForm from "../../../components/ReserveForm/ReserveForm.js";
import AvailableSeatsFilter from "../../../components/AvailableSeatsFilter/AvailableSeatsFilter";
import { useState } from "react";

export default function Reseve({ handleReserve }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const router = useRouter();
  if (!router.isReady) return;
  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);

  function searchRemainingSeats(dataForSearch) {
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
      <AvailableSeatsFilter
        restaurant={restaurant}
        searchRemainingSeats={searchRemainingSeats}
      />
      <p>
        {!remainingSeats
          ? ""
          : `Es gibt noch ${remainingSeats}
        ${remainingSeats === 1 ? "Platz" : "Plätze"}.`}
      </p>
      {date && time && (
        <ReserveForm
          restaurant={restaurant}
          remainingSeats={remainingSeats}
          date={date}
          time={time}
          handleReserve={handleReserve}
        />
      )}
    </>
  );
}
