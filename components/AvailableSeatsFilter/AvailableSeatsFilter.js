import styled from "styled-components";
import { restaurants } from "../../lib/data";
import { useState } from "react";

export default function AvailableSeatsFilter({ searchRemainingSeats }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const timeslotForSearch = data.date + " " + data.time;
    searchRemainingSeats(timeslotForSearch);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>the form</h2>

      <label htmlFor="date">Tag:</label>
      <input type="date" name="date" id="date" required></input>
      <label htmlFor="time">Zeit:</label>
      <select type="time" name="time" id="time" required>
        <option value="11:00 Uhr">11:00 Uhr</option>
        <option value="12:00 Uhr">12:00 Uhr</option>
        <option value="13:00 Uhr">13:00 Uhr</option>
        <option value="18:00 Uhr">18:00 Uhr</option>
        <option value="19:00 Uhr">19:00 Uhr</option>
        <option value="20:00 Uhr">20:00 Uhr</option>
      </select>
      <button type="submit"> Suchen Jetzt </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
