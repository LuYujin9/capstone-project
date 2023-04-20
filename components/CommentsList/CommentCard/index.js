import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowUpRightIcon,
  XIcon,
} from "../../../public/icons";
import { updateData, deleteData } from "../../../utils/handleDataUtils";
import { StyledLink } from "../../styles";
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
  const [needExpandButton, setNeedExpandButton] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data: comment, isLoading, error } = useSWR(`/api/comments/${id}`);
  const { trigger: triggerComment } = useSWRMutation(
    `/api/comments/${id}`,
    updateData
  );

  useEffect(() => {
    setNeedExpandButton(
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
      <StyledCard>
        <StyledForm
          aria-label="Edit comment"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="context"></label>
          <textarea
            rows="5"
            type="context"
            name="context"
            id="context"
            defaultValue={comment.context}
            aria-label="Ändern Kommentar"
            required
          ></textarea>
          <SubmitButton> Abschicken</SubmitButton>
        </StyledForm>
      </StyledCard>
    );
  }

  return (
    <StyledCard>
      {comment.username === username && (
        <ButtonContainer>
          <StyledButton onClick={() => setIsEditOpen(!isEditOpen)}>
            Ändern
          </StyledButton>
          <StyledButton onClick={handleDelete}>Löschen</StyledButton>
        </ButtonContainer>
      )}
      <StyledSection>
        <p>{comment.time}</p>
        {!isInMyData && <p>{comment.username}</p>}
      </StyledSection>
      {isInMyData && (
        <StyledLink href={`/restaurants/${comment.restaurant_Id}`}>
          {comment.restaurantName}
          <ArrowUpRightIcon alt="Pfeil zu oben rechts" />
        </StyledLink>
      )}
      <StyledParagraph ref={commentRef} isExpanded={isExpanded}>
        {comment.context}
      </StyledParagraph>
      {needExpandButton && (
        <ExpandButton
          aria-label="Zum Ausklappen und Einklappen der Kommentare"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUpIcon alt="Pfeil Icon nach oben" color="black" />
          ) : (
            <ChevronDownIcon alt="Pfeil Icon nach unter" color="black" />
          )}
        </ExpandButton>
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
  width: 100%;
  margin: 1rem auto;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  border-radius: 2px;
  background-color: var(--white-color);
`;

const ButtonContainer = styled.div`
  margin: auto;
  width: 105%;
  height: 1.5rem;
  position: relative;
  bottom: 0.3rem;
  right: 5px;
  display: flex;
  background-color: var(--background-color);
`;

const StyledButton = styled.button`
  width: 7rem;
  height: 1.5rem;
  margin: auto;
  border-radius: 20px 20px 0 0;
  border: none;
  font-weight: bold;
  color: var(--button-color);
  background-color: var(--white-color);

  &:hover {
    background-color: var(--tag-color);
  }
`;

const SubmitButton = styled.button`
  width: 7rem;
  height: 1.5rem;
  margin: auto;
  border-radius: 10px;
  border: none;
  color: var(--white-color);
  background-color: var(--button-color);
`;

const ExpandButton = styled.button`
  border: none;
  align-self: end;
  background-color: var(--white-color);
`;
const CloseButton = styled.button`
  margin: 0;
  padding: 0 0.5rem;
  border: none;
  align-self: end;

  background-color: var(--white-color);
`;

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 0.5rem 5%;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
