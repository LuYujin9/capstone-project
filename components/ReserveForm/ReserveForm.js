import styled from "styled-components";
import { restaurants } from "../../lib/data";
import AvailableSeatsFilter from "../AvailableSeatsFilter/AvailableSeatsFilter";
import { useState } from "react";

export default function ReserveForm({
  remainingSeats,
  handleReserve,
  id,
  timeslot,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserveData = Object.fromEntries(formData);
    handleReserve(reserveData, id, timeslot);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="number_of_guests">Seats</label>
      <input
        type="number"
        name="number_of_guests"
        id="number_of_guests"
        min="1"
        max={remainingSeats}
        required
      ></input>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" required></input>
      <label htmlFor="email">Email Adresse:</label>
      <input type="email" name="email" id="email"></input>
      <label htmlFor="phone">Telefonnummber:</label>
      <input type="number" name="phone" id="phone" required></input>
      <button type="submit"> resevieren jetzt </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
