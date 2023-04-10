import { restaurants } from "../../../lib/data.js";
import { useRouter } from "next/router";
import styled from "styled-components";
import Heading from "../../../components/Heading/Heading";
import ReserveForm from "../../../components/ReserveForm/ReserveForm.js";
import RemainingSeatsFilter from "../../../components/RemainingSeatsFilter/RemainingSeatsFilter";
import { useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { uid } from "uid";

export default function Reseve({ onStoreReserveData }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [reserveMessege, setReservMessege] = useState("");

  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(`/api/restaurants/${id}`);

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
      console.log(newReservInfos);
      await trigger({ reserveInfos: newReservInfos });
      return;
    }
    const newRemainingSeats = {
      date: date,
      time: time,
      remainingSeats: restaurant.maxSeats - reserveData.number_of_guests,
    };
    const newReservInfos = [...reserveInfos, newRemainingSeats];
    console.log(newReservInfos);
    await trigger({ reserveInfos: newReservInfos });
  }

  if (!isReady || isLoading || error) return <h2>Loading</h2>;

  async function addUserInfo(reserveData, restaurant, date, time) {
    const { number_of_guests, name, email, phone } = reserveData;
    const newUserInfo = {
      restaurantId: restaurant._id,
      name_of_restaurant: restaurant.name,
      isFavorite: false,
      isReserved: true,
      reserves: [
        {
          reserveId: uid(),
          name: name,
          email: email,
          number_of_guests: number_of_guests,
          phone: phone,
          date: date,
          time: time,
        },
      ],
    };
    const response = await fetch("/api/user-infos", {
      method: "POST",
      body: JSON.stringify(newUserInfo),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await response.json();
      setReservMessege(
        `Sie haben erfolgereich am ${date} um ${time} Uhr ${number_of_guests}  ${
          number_of_guests == 1 ? "Platz" : "Plätze"
        } in ${restaurant.name} reservert.`
      );
    } else {
      console.error(response.status);
    }
  }

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
            onStoreReserveData={addUserInfo}
            editRemainingSeats={editRemainingSeats}
          />
        )}
        <p>{reserveMessege}</p>
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
