import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon, ChevronUpIcon } from "../../../public/icons";

export default function ThePage({ comment, time }) {
  const commentRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  useEffect(() => {
    setNeedExpandBtn(
      commentRef?.current?.scrollHeight > commentRef?.current?.clientHeight
    );
  }, []);

  return (
    <StyledCard>
      <p>{time}</p>
      <StyledParagraph ref={commentRef} isExpanded={isExpanded}>
        {comment}
      </StyledParagraph>
      {needExpandBtn && (
        <StyledButton
          aria-label="Button zum Ausklappen und Einklappen der Kommentare"
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
  margin: 0.5rem 1.5rem;
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  border-radius: 2px;
  background-color: var(--white-color);
  box-shadow: 1px 1px 1px 1px var(--linen-color);
`;

const StyledButton = styled.button`
  border: none;

  align-self: end;

  background-color: var(--white-color);
`;
