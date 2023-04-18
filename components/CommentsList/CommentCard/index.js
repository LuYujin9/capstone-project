import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon } from "../../../public/icons";

export default function CommentCard({ comment }) {
  const commentRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  useEffect(() => {
    setNeedExpandBtn(
      commentRef?.current?.scrollHeight > commentRef?.current?.clientHeight
    );
  }, []);
  const { username, time, context } = comment;
  return (
    <StyledCard>
      <StyledSection>
        <p>{time}</p>
        <p>{username}</p>
      </StyledSection>
      <StyledParagraph ref={commentRef} isExpanded={isExpanded}>
        {context}
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
