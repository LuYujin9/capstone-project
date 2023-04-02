import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import MenuListItem from "../../../components/MenuListItem/MenuListItem.js";
import ReserveForm from "../../../components/ReserveForm/ReserveForm.js";
import AvailableSeatsFilter from "../../../components/AvailableSeatsFilter/AvailableSeatsFilter";
import { useState } from "react";
import { useEffect } from "react";

export default function Reseve({ handleReserve }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [timeslot, setTimeslot] = useState();
  //const [reserve, setReserv] = useState();

  const router = useRouter();

  if (!router.isReady) return;
  const { id } = router.query;
  const restaurant = restaurants.find((restaurant) => restaurant.id === id);
  // console.log(restaurant);
  function searchRemainingSeats(timeslotForSearch) {
    const pairingInfo = restaurant.reserveInfos.find(
      (info) => info.timeslot === timeslotForSearch
    );
    setRemainingSeats(
      pairingInfo ? pairingInfo.remainingSeats : restaurant.maxSeats
    );

    console.log("timeslotForSearch", timeslotForSearch);
    setTimeslot(timeslotForSearch);
    console.log("timeslot", timeslot);
  }

  /*   function handleReserve(data, id, timeslot) {
    console.log("timeslot", timeslot);
    setReserv({ id: id, timeslot: timeslot, ...data });
    console.log(reserve);
  } */

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

      <ReserveForm
        restaurant={restaurant}
        remainingSeats={remainingSeats}
        timeslot={timeslot}
        handleReserve={handleReserve}
        id={id}
      />
    </>
  );
}
