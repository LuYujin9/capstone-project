import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon } from "../../../public/icons";
import { updateData, deleteData } from "../../../utils/handleDataUtils";
import useSWRMutation from "swr/mutation";
import useSWR from "swr";

export default function CommentCard({
  id,
  username,
  mutateComments,
  isInMyData,
}) {
  const commentRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const [needExpandBtn, setNeedExpandBtn] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data: comment, isLoading, error } = useSWR(`/api/comments/${id}`);
  const { trigger: triggerComment } = useSWRMutation(
    `/api/comments/${id}`,
    updateData
  );

  useEffect(() => {
    setNeedExpandBtn(
      commentRef?.current?.scrollHeight > commentRef?.current?.clientHeight
    );
  }, []);

  if (!comment || isLoading || error) return <h2>Loading</h2>;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const modifiedComment = Object.fromEntries(formData);
    await triggerComment({ context: modifiedComment.context });
    setIsEditOpen(false);
  }

  async function handleDelete() {
    await deleteData(`/api/comments/${id}`);
    mutateComments();
  }

  if (isEditOpen) {
    return (
      <>
        <button onClick={() => setIsEditOpen(false)}>close</button>
        <StyledForm
          aria-label="Edit comment"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="context">
            <b>Ändern Sie den Kommentar hier:</b>
          </label>
          <textarea
            rows="3"
            type="context"
            name="context"
            id="context"
            defaultValue={comment.context}
            required
          ></textarea>
          <StyledButton type="submit" aria-label="Um abzuschicken">
            Abschicken
          </StyledButton>
        </StyledForm>
      </>
    );
  }

  return (
    <StyledCard>
      <StyledSection>
        <p>{comment.time}</p>
        <p>{comment.username}</p>
        <p>{comment.restaurantName}</p>
      </StyledSection>
      {comment.username === username && (
        <div>
          <button onClick={() => setIsEditOpen(!isEditOpen)}>Ändern</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}
      <StyledParagraph ref={commentRef} isExpanded={isExpanded}>
        {comment.context}
      </StyledParagraph>
      {needExpandBtn && (
        <StyledButton
          aria-label="Zum Ausklappen und Einklappen der Kommentare"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUpIcon alt="Pfeil Icon nach oben" color="black" />
          ) : (
            <ChevronDownIcon alt="Pfeil Icon nach unter" color="black" />
          )}
        </StyledButton>
      )}
    </StyledCard>
  );
}

const StyledParagraph = styled.p`
  margin: 0.5rem;

  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;"
      : ""};
`;

const StyledCard = styled.article`
  width: 90%;
  margin: 0.3rem auto;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  border-radius: 2px;
  background-color: var(--white-color);
  box-shadow: 1px 1px 2px 1px var(--tag-color);
`;

const StyledButton = styled.button`
  border: none;
  align-self: end;
  background-color: var(--white-color);
`;

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 5%;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
