import { StyledButton } from "../../components/styles";
import styled from "styled-components";

export default function CommentForm({ restaurant, username, addNewComment }) {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
  };
  const formattedtime = currentDate.toLocaleDateString("de-DE", options);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = Object.fromEntries(formData);
    addNewComment(formattedtime, comment, restaurant, username);
    event.target.reset();
  }

  return (
    <StyledForm aria-label="comment" onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="context">
        <b>Kommentieren Sie hier:</b>
      </label>
      <textarea
        rows="3"
        type="context"
        name="context"
        id="context"
        required
      ></textarea>
      <StyledButton type="submit" aria-label="Um abzuschicken">
        Abschicken
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 5%;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  @media only screen and (min-width: 650px) {
    width: 36.5em;
    margin: auto;
    margin-top: 2em;
  }
`;
