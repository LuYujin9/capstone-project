import Heading from "../../../components/Heading";
import ReserveForm from "../../../components/ReserveForm";
import MessageModal from "../../../components/MessageModal";
import { StyledMain } from "../../../components/styles";
import { updateData } from "../../../utils/handleDataUtils";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function EditReserve({ username, onLogin }) {
  const [message, setMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const {
    data: reserve,
    isLoading,
    error,
  } = useSWR(id ? `/api/reserves/${id}` : null);
  const { data: restaurant } = useSWR(
    reserve ? `/api/restaurants/${reserve.restaurantId}` : null
  );
  const { trigger: triggerRestaurant } = useSWRMutation(
    reserve ? `/api/restaurants/${reserve.restaurantId}` : null,
    updateData
  );
  const { trigger: triggerReserve } = useSWRMutation(
    id ? `/api/reserves/${id}` : null,
    updateData
  );
  if (!restaurant || isLoading || error) return <h2>Loading</h2>;

  function getRemainingSeats(reserve, restaurant) {
    const pairingInfo = restaurant.reserveInfos.find(
      (info) => info.date === reserve.date && info.time === reserve.time
    );
    return pairingInfo.remainingSeats;
  }

  const remainingSeats = getRemainingSeats(reserve, restaurant);
  const availableSeats = remainingSeats + reserve.number_of_guests;

  async function editRemainingSeats(reserveData, restaurant, date, time) {
    const reserveInfos = restaurant.reserveInfos;
    const matchedReserveInfo = reserveInfos.find(
      (info) => info.date === date && info.time === time
    );
    const newRemainingSeats =
      matchedReserveInfo.remainingSeats +
      reserve.number_of_guests -
      reserveData.number_of_guests;
    const newReservInfos = reserveInfos.map((info) =>
      info === matchedReserveInfo
        ? { ...info, remainingSeats: newRemainingSeats }
        : info
    );
    await triggerRestaurant({ reserveInfos: newReservInfos });
  }

  async function editReserve(reserveData, restaurant, date, time) {
    const { number_of_guests, name, email, phone } = reserveData;

    await triggerReserve({
      name: name,
      email: email,
      number_of_guests: number_of_guests,
      phone: phone,
    });
    const message = `Weee! Sie haben erfolgereich Ihre Reservierung geändert.
    Die erneuerte Reservierung: am ${date} um ${time} Uhr ${number_of_guests}  ${
      number_of_guests == 1 ? "Platz" : "Plätze"
    } in ${restaurant.name}.`;
    setMessage(message);
    setIsMessageModalOpen(true);
  }

  return (
    <>
      <Heading isLoginWindowOpen={false} username={username} onLogin={onLogin}>
        Ändern die Reservierung
      </Heading>

      <StyledMain>
        <StyledParagraph>
          Falls Sie die Zeit verändern möchten, bitte stornieren Sie and
          reservieren Sie neu.{<br />} In dem Zeitraum gibt es noch{" "}
          {remainingSeats} frei Plätze. Bitte schreiben Sie nicht mehr als{" "}
          {availableSeats} Personen.
        </StyledParagraph>
        <ReserveForm
          restaurant={restaurant}
          availableSeats={availableSeats}
          date={reserve.date}
          time={reserve.time}
          editRemainingSeats={editRemainingSeats}
          onReserve={editReserve}
          defaultData={reserve}
        />

        <MessageModal
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        >
          {message}
        </MessageModal>
      </StyledMain>
    </>
  );
}

const StyledParagraph = styled.p`
  margin: 2rem;
  font-weight: bold;
`;
