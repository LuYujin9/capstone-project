import styled from "styled-components";

export default function ReserveForm({
  remainingSeats,
  onStoreReserveData,
  restaurant,
  date,
  time,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserveData = Object.fromEntries(formData);
    onStoreReserveData(reserveData, restaurant, date, time);
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
        required
      ></input>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" required></input>
      <label htmlFor="email">Email Adresse:</label>
      <input type="email" name="email" id="email"></input>
      <label htmlFor="phone">Telefonnummber:</label>
      <input type="number" name="phone" id="phone" required></input>
      <StyledSubmitButton type="submit" aria-label="Knopf um zu reservieren">
        Reservieren
      </StyledSubmitButton>
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

const StyledSubmitButton = styled.button`
  width: 6rem;
  padding: 0.3rem;
  margin: 1rem;

  align-self: center;

  border-radius: 15px;
  border: none;
  color: var(--white-color);
  background-color: var(--red-vine-color);
  box-shadow: 2px 2px 5px 1px var(--linen-color);
`;
