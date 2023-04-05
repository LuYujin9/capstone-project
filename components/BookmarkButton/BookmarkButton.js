import styled from "styled-components";
import BookmarkIcon from "../../public/icons/bookmark";
import { useState } from "react";

export default function BookmarkButton({ id, onToggleBookmark, restaurant }) {
  const [buttonColor, setButtonColor] = useState("none");
  return (
    <StyledButton
      aria-label="bookmark"
      onClick={() => {
        setButtonColor(buttonColor === "#9C4041" ? "none" : "#9C4041");
        onToggleBookmark(id, restaurant);
      }}
    >
      <BookmarkIcon fillColor={buttonColor} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;

  position: absolute;
  top: 0.7rem;
  right: 1rem;
`;
