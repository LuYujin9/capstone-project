import { StyledButton, StyledFormTitle, StyledForm } from "../styles";
import userEvent from "@testing-library/user-event";

export default function RemainingSeatsFilter({ getRemainingSeats }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataForSearch = Object.fromEntries(formData);
    getRemainingSeats(dataForSearch);
  }

  const timeNow = new Date();
  const year = timeNow.getFullYear();
  const month = (timeNow.getMonth() + 1).toString().padStart(2, "0");
  const date = timeNow.getDate().toString().padStart(2, "0");
  const dateNow = `${year}-${month}-${date}`;

  return (
    <StyledForm aria-labelledby="formHeader" onSubmit={handleSubmit}>
      <StyledFormTitle id="formHeader">
        Suchen verfügbare Plätze
      </StyledFormTitle>
      <label htmlFor="date">Tag:</label>
      <input type="date" name="date" id="date" min={dateNow} required></input>
      <label htmlFor="time">Zeit:</label>
      <select name="time" id="time" required>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>
      <StyledButton
        type="submit"
        aria-label="Um freie Plätze anzeigen zu lassen"
      >
        Suchen
      </StyledButton>
    </StyledForm>
  );
}
