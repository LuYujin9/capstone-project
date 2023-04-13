import styled from "styled-components";
import { StyledButton } from "../styles";

export default function ReserveForm({
  remainingSeats,
  onReserve,
  restaurant,
  date,
  time,
  editRemainingSeats,
  defaultData,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserveData = Object.fromEntries(formData);
    onReserve(reserveData, restaurant, date, time);
    editRemainingSeats(reserveData, restaurant, date, time);
    event.target.reset();
  }

  return (
    <StyledForm aria-labelledby="reserveFormHeader" onSubmit={handleSubmit}>
      <StyledLegend id="reserveFormHeader">Reservieren die Plätze</StyledLegend>
      <label htmlFor="number_of_guests">Personen:</label>
      <input
        type="number"
        name="number_of_guests"
        id="number_of_guests"
        min="1"
        max={remainingSeats}
        defaultValue={defaultData?.number_of_guests}
        required
      ></input>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        defaultValue={defaultData?.name}
        required
      ></input>
      <label htmlFor="email">Email Adresse:</label>
      <input
        type="email"
        name="email"
        id="email"
        defaultValue={defaultData?.email}
      ></input>
      <label htmlFor="phone">Telefonnummber:</label>
      <input
        maxLength="11"
        minLength="6"
        type="tel"
        name="phone"
        id="phone"
        defaultValue={defaultData?.phone}
        required
      ></input>
      <StyledButton type="submit" aria-label="Knopf um zu einreichen">
        Einreichen
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 85%;
  padding: 0.5rem 5%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  border-radius: 1rem;
  border: 2px solid var(--red-vine-color);
`;

const StyledLegend = styled.legend`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
`;
