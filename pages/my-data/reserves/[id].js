import Heading from "../../../components/Heading";
import ReserveForm from "../../../components/ReserveForm";
import MessageModal from "../../../components/MessageModal";
import { StyledMain } from "../../../components/styles";
import { updateRemainingSeats } from "../../../utils/handleRemainingSeatsUtils";
import { updateReserve } from "../../../utils/handleReserveUtils";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function EditReserve() {
  const [reserveMessage, setReserveMessage] = useState("");
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const { isReady } = router;
  const { data: reserve, isLoading, error } = useSWR(`/api/reserves/${id}`);
  const { data: restaurant } = useSWR(
    `/api/restaurants/${reserve?.restaurantId}`
  );
  const { trigger: triggerRestaurant } = useSWRMutation(
    `/api/restaurants/${reserve?.restaurantId}`,
    updateRemainingSeats
  );
  const { trigger: triggerReserve } = useSWRMutation(
    `/api/reserves/${id}`,
    updateReserve
  );
  if (!isReady || !restaurant || isLoading || error) return <h2>Loading</h2>;

  function getRemainingSeats(reserve, restaurant) {
    const pairingInfo = restaurant.reserveInfos.find(
      (info) => info.date === reserve.date && info.time === reserve.time
    );
    return pairingInfo.remainingSeats;
  }
  const remainingSeats = getRemainingSeats(reserve, restaurant);

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
    const reserveMessage = `Weee! Sie haben erfolgereich Ihre Reservierung geändert.
    Die erneuerte Reservierung: am ${date} um ${time} Uhr ${number_of_guests}  ${
      number_of_guests == 1 ? "Platz" : "Plätze"
    } in ${restaurant.name}.`;
    setReserveMessage(reserveMessage);
    setIsMessageModalOpen(true);
  }

  return (
    <>
      <Heading>Ändern die Reservierung</Heading>
      <StyledMain>
        <p>
          Falls Sie die Zeit verändern möchten, bitte stornieren Sie and neu
          reservieren. In dem Zeitraum gibt es noch {remainingSeats} frei
          Plätze. Bitte schreiben Sie nicht mehr als{" "}
          {remainingSeats + reserve.number_of_guests} Personen.
        </p>
        <ReserveForm
          restaurant={restaurant}
          remainingSeats={remainingSeats}
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
          {reserveMessage}
        </MessageModal>
      </StyledMain>
    </>
  );
}
