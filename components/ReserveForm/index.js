import { StyledButton, StyledForm, StyledFormTitle } from "../styles";

export default function ReserveForm({
  availableSeats,
  onReserve,
  restaurant,
  date,
  time,
  editRemainingSeats,
  defaultData,
  username,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reserveData = Object.fromEntries(formData);
    onReserve(reserveData, restaurant, date, time, username);
    editRemainingSeats(reserveData, restaurant, date, time);
    event.target.reset();
  }

  return (
    <StyledForm aria-labelledby="reserveFormHeader" onSubmit={handleSubmit}>
      <StyledFormTitle id="reserveFormHeader">
        Reservieren die Plätze
      </StyledFormTitle>
      <label htmlFor="number_of_guests">Personen:</label>
      <input
        type="number"
        name="number_of_guests"
        id="number_of_guests"
        min="1"
        max={availableSeats}
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
      <label htmlFor="phone">Telefonummer:</label>
      <input
        maxLength="11"
        minLength="6"
        type="tel"
        name="phone"
        id="phone"
        defaultValue={defaultData?.phone}
        required
      ></input>
      <StyledButton type="submit" aria-label="Um abzuschicken">
        Abschicken
      </StyledButton>
    </StyledForm>
  );
}
