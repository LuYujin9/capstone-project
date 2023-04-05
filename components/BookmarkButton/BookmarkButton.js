import styled from "styled-components";
import BookmarkIcon from "../../public/icons/bookmark";
import { useState } from "react";

export default function BookmarkButton({
  id,
  onToggleBookmark,
  restaurant,
  userInfos,
}) {
  const matchedInfo = userInfos?.find((info) => info.id === id);
  const isFavorite = matchedInfo ? matchedInfo.isFavorite : false;
  const buttonColor = isFavorite === true ? "#9C4041" : "none";
  return (
    <StyledButton
      aria-label="bookmark"
      onClick={() => {
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
