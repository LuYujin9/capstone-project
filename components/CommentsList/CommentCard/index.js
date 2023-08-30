import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowUpRightIcon,
} from "../../../public/icons";
import { updateData, deleteData } from "../../../utils/handleDataUtils";
import Link from "next/link";
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
  const [needExpandButton, setNeedExpandButton] = useState(true);
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
  }, [comment]);

  if (!comment || isLoading || error) return <h2>Loading</h2>;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const modifiedComment = Object.fromEntries(formData);
    await triggerComment({ context: modifiedComment.context });
    setIsEditOpen(false);
    setNeedExpandButton(true);
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
      <TitleContainer>
        {isInMyData && (
          <StyledLink href={`/restaurants/${comment.restaurant_Id}`}>
            {comment.restaurantName}
            <ArrowUpRightIcon alt="Pfeil nach oben rechts" size={25} />
          </StyledLink>
        )}
        {!isInMyData && <ParagraphForName>{comment.username}</ParagraphForName>}
        <ParagraphForTime>{comment.time}</ParagraphForTime>
      </TitleContainer>
      <StyledParagraph ref={commentRef} isExpanded={isExpanded}>
        {comment.context}
      </StyledParagraph>
      {needExpandButton && (
        <ExpandButton
          aria-label="Zum Ausklappen und Einklappen der Kommentare"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUpIcon
              alt="Pfeil Icon nach oben"
              color="var(--button-color)"
            />
          ) : (
            <ChevronDownIcon
              alt="Pfeil Icon nach unten"
              color="var(--button-color)"
            />
          )}
        </ExpandButton>
      )}
      {comment.username === username && (
        <ButtonContainer>
          <StyledButton onClick={() => setIsEditOpen(!isEditOpen)}>
            Ändern
          </StyledButton>
          <StyledButton onClick={handleDelete}>Löschen</StyledButton>
        </ButtonContainer>
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
  border-radius: 1rem;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  background-color: var(--white-color);
`;

const TitleContainer = styled.section`
  margin: 0.3rem 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  padding-left: 0.2rem;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  color: var(--button-color);
`;

const ParagraphForName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`;

const ParagraphForTime = styled.p`
  margin: 0 0.2rem;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  margin: 0.3rem auto;
  width: 105%;
  height: 1.5rem;
  position: relative;
  bottom: 0.3rem;
  right: 5px;
  display: flex;
`;

const StyledButton = styled.button`
  width: 7rem;
  height: 1.5rem;
  margin: auto;
  border-radius: 1rem;
  border: none;
  font-weight: bold;
  color: var(--button-color);
  background-color: var(--tag-color);

  &:hover {
    background-color: var(--frame-color);
  }
`;

const SubmitButton = styled.button`
  width: 7rem;
  height: 1.5rem;
  margin: auto;
  margin-top: 0.5rem;
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
  }
`;
