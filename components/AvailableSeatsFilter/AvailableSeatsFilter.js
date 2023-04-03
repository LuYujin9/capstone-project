import styled from "styled-components";

export default function AvailableSeatsFilter({ searchRemainingSeats }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataForSearch = Object.fromEntries(formData);
    searchRemainingSeats(dataForSearch);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Suchen verfügbare Plätze</h2>
      <label htmlFor="date">Tag:</label>
      <input type="date" name="date" id="date" required></input>
      <label htmlFor="time">Zeit:</label>
      <select name="time" id="time" required>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>
      <button type="submit" aria-label="button to search the remaining seats">
        Suchen
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
