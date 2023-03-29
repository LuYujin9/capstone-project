import { useState } from "react";

import Chevron_left from "../../public/icons/Chevron_left";
import Chevron_right from "../../public/icons/chevron_right";
import {
  StyledSection,
  StyledPicture,
  ToLastPhotoButton,
  ToNextPhotoButton,
  StyledImage,
} from "./Album.styled";

export default function Album({ photos }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  function handleToNextPhoto() {
    photoIndex < photos.length - 1 ? setPhotoIndex(photoIndex + 1) : photoIndex;
  }
  function handleToLastPhoto() {
    photoIndex > 0 ? setPhotoIndex(photoIndex - 1) : photoIndex;
  }

  return (
    <StyledSection>
      <ToLastPhotoButton
        aria-label="to the last photo"
        onClick={handleToLastPhoto}
        photoIndex={photoIndex}
      >
        <Chevron_left color="#BA494B" />
      </ToLastPhotoButton>
      <StyledPicture>
        <StyledImage
          alt="a photo of the restaurant"
          src={photos[photoIndex]}
          fill
          sizes="(min-width: 768px) 100vw"
          priority
        />
      </StyledPicture>
      <ToNextPhotoButton
        aria-label="to the next photo"
        onClick={handleToNextPhoto}
        photoIndex={photoIndex}
        photos={photos}
      >
        <Chevron_right color="#BA494B" />
      </ToNextPhotoButton>
    </StyledSection>
  );
}
