import { useRouter } from "next/router";
import { StyledMain } from "../../../components/styles";
import Heading from "../../../components/Heading";
import ReserveForm from "../../../components/ReserveForm";
import RemainingSeatsFilter from "../../../components/RemainingSeatsFilter";
import MessageModal from "../../../components/MessageModal";
import { updateData } from "../../../utils/handleDataUtils";
import { useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Reseve({ username, onLogin }) {
  const [remainingSeats, setRemainingSeats] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [message, setMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(id ? `/api/restaurants/${id}` : null);
  const { trigger: triggerRestaurant } = useSWRMutation(
    id ? `/api/restaurants/${id}` : null,
    updateData
  );
  if (!restaurant || isLoading || error) return <h2>Loading</h2>;

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
    setMessage(undefined);
  }

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
      await triggerRestaurant({ reserveInfos: newReservInfos });
      return;
    }

    const newRemainingSeats = {
      date: date,
      time: time,
      remainingSeats: restaurant.maxSeats - reserveData.number_of_guests,
    };
    const newReservInfos = [...reserveInfos, newRemainingSeats];
    await triggerRestaurant({ reserveInfos: newReservInfos });
  }

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
      const message = `Sie haben erfolgereich am ${date} um ${time} Uhr ${number_of_guests}  ${
        number_of_guests == 1 ? "Platz" : "Plätze"
      } in ${restaurant.name} reservert.`;
      setMessage(message);
      setIsMessageModalOpen(true);
    } else {
      console.error(response.status);
      return <h2> Es gibt einen Fehler, bitten versuchen Sie später.</h2>;
    }

    setRemainingSeats(undefined);
  }

  return (
    <>
      <Heading isLoginWindowOpen={false} username={username} onLogin={onLogin}>
        {restaurant.name}
      </Heading>
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
          {message}
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
