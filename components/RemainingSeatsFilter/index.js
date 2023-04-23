import { StyledFormTitle, StyledForm } from "../styles";
import { useState } from "react";

export default function RemainingSeatsFilter({ getRemainingSeats }) {
  const [values, setValues] = useState();
  function handleChange(event) {
    const value = event.target.value;
    const dataForSearch = { ...values, [event.target.name]: value };
    setValues(dataForSearch);
    getRemainingSeats(dataForSearch);
  }

  const timeNow = new Date();
  const year = timeNow.getFullYear();
  const month = (timeNow.getMonth() + 1).toString().padStart(2, "0");
  const date = timeNow.getDate().toString().padStart(2, "0");
  const dateNow = `${year}-${month}-${date}`;

  return (
    <StyledForm aria-labelledby="formHeader" onChange={handleChange}>
      <StyledFormTitle id="formHeader">
        Suchen verfügbare Plätze
      </StyledFormTitle>
      <label htmlFor="date">Tag:</label>
      <input type="date" name="date" id="date" min={dateNow} required></input>
      <label htmlFor="time">Zeit:</label>
      <select name="time" id="time" required>
        <option value="">-- wahlen einen Zeitraum --</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>
    </StyledForm>
  );
}
