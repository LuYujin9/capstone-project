import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledMain } from "../../../components/styles";
import Heading from "../../../components/Heading";
import ReserveForm from "../../../components/ReserveForm";
import RemainingSeatsFilter from "../../../components/RemainingSeatsFilter";
import MessageModal from "../../../components/MessageModal";
import { useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Reseve() {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [reserveMessage, setReserveMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(`/api/restaurants/${id}`);

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
    setReserveMessage(undefined);
  }

  async function updateRemainingSeats(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { trigger } = useSWRMutation(
    `/api/restaurants/${id}`,
    updateRemainingSeats
  );

  async function editRemainingSeats(reserveData, restaurant, date, time) {
    const reserveInfos = restaurant.reserveInfos;
    const matchedReserveInfo = reserveInfos.find(
      (info) => info.date === date && info.time === time
    );

    if (matchedReserveInfo) {
      const newRemainingSeats =
        matchedReserveInfo.remainingSeats - reserveData.number_of_guests;
      const newReservInfos = reserveInfos.map((info) =>
        info === matchedReserveInfo
          ? { ...info, remainingSeats: newRemainingSeats }
          : info
      );
      await trigger({ reserveInfos: newReservInfos });
      return;
    }

    const newRemainingSeats = {
      date: date,
      time: time,
      remainingSeats: restaurant.maxSeats - reserveData.number_of_guests,
    };
    const newReservInfos = [...reserveInfos, newRemainingSeats];
    await trigger({ reserveInfos: newReservInfos });
  }

  if (!isReady || isLoading || error) return <h2>Loading</h2>;

  async function postNewReserve(reserveData, restaurant, date, time) {
    const { number_of_guests, name, email, phone } = reserveData;

    const newReserve = {
      name: name,
      email: email,
      number_of_guests: number_of_guests,
      phone: phone,
      date: date,
      time: time,
      restaurantName: restaurant.name,
      restaurantId: restaurant._id,
    };

    const response = await fetch("/api/reserves", {
      method: "POST",
      body: JSON.stringify(newReserve),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      await response.json();
      const reserveMessage = `Sie haben erfolgereich am ${date} um ${time} Uhr ${number_of_guests}  ${
        number_of_guests == 1 ? "Platz" : "Plätze"
      } in ${restaurant.name} reservert.`;
      setReserveMessage(reserveMessage);
    } else {
      const reserveMessage =
        "Es gibt einen Fehler, bitten versuchen Sie später.";
      setReserveMessage(reserveMessage);
      console.error(response.status);
    }
    setRemainingSeats(undefined);
    setIsMessageModalOpen(true);
  }

  return (
    <>
      <Heading>{restaurant.name}</Heading>
      <StyledMain>
        <RemainingSeatsFilter
          restaurant={restaurant}
          getRemainingSeats={getRemainingSeats}
        />
        <h2>
          {" "}
          {!remainingSeats
            ? ""
            : `Es gibt noch ${remainingSeats}
        ${remainingSeats === 1 ? "Platz" : "Plätze"}.`}
        </h2>
        <MessageModal
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        >
          {reserveMessage}
        </MessageModal>
        {date && time && (
          <ReserveForm
            restaurant={restaurant}
            availableSeats={remainingSeats}
            date={date}
            time={time}
            onReserve={postNewReserve}
            editRemainingSeats={editRemainingSeats}
          />
        )}
      </StyledMain>
    </>
  );
}
