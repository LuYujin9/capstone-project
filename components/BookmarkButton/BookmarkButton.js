import styled from "styled-components";
import BookmarkIcon from "../../public/icons/bookmark";

export default function BookmarkButton({ onToggleBookmark, isFavorite }) {
  const buttonColor = isFavorite === true ? "#9C4041" : "none";
  return (
    <StyledButton aria-label="bookmark" onClick={onToggleBookmark}>
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
