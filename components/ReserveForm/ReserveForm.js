import styled from "styled-components";

export default function ReserveForm({
  remainingSeats,
  handleReserve,
  restaurant,
  date,
  time,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserveData = Object.fromEntries(formData);
    handleReserve(reserveData, restaurant, date, time);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
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
      <button type="submit" aria-label="button to reserve">
        Resevieren
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
