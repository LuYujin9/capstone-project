import styled from "styled-components";
import { HeartIcon } from "../../public/icons";

export default function BookmarkButton({ onToggleBookmark, isFavorite }) {
  const buttonColor = isFavorite === true ? "var(--red-vine-color)" : "none";
  return (
    <StyledButton aria-label="Bookmark Knopf" onClick={onToggleBookmark}>
      <HeartIcon alt="Herz Icon" fillColor={buttonColor} />
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
