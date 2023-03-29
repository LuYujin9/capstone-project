import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ChevronDown from "../../public/icons/chevron_down";
import ChevronUp from "../../public/icons/chevron_up";

export default function ThePage({ comment, time }) {
  const descRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);
  const [needExpandBtn, setNeedExpandBtn] = useState(false);

  useEffect(() => {
    setNeedExpandBtn(
      descRef?.current?.scrollHeight > descRef?.current?.clientHeight
    );
  }, []);

  return (
    <StyledCard>
      <p>{time}</p>
      <StyledP ref={descRef} isExpanded={isExpanded}>
        {comment}
      </StyledP>
      {needExpandBtn && (
        <StyledButton
          aria-label="expand and collapse the comment button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp color="black" />
          ) : (
            <ChevronDown color="black" />
          )}
        </StyledButton>
      )}
    </StyledCard>
  );
}

const StyledP = styled.p`
  margin: 0.5rem;

  ${({ isExpanded }) =>
    isExpanded === false
      ? "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3; -webkit-box-orient: vertical;"
      : ""};
`;

const StyledCard = styled.article`
  margin: 1rem 0;
  padding: 0.1rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  border-radius: 2px;
  background-color: var(--white-color);
  box-shadow: 1px 1px 1px 1px var(--linen-color);
`;

const StyledButton = styled.button`
  border: none;
  padding: 0.5rem;

  align-self: end;

  background-color: var(--white-color);
`;
