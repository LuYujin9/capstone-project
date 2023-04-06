import { useState } from "react";
import Chevron_left from "../../public/icons/chevron_left";
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
        aria-label="zum letzten Foto"
        onClick={handleToLastPhoto}
        photoIndex={photoIndex}
      >
        <Chevron_left
          alt="Sparren Icon nach links"
          color="#BA494B"
          size="30px"
        />
      </ToLastPhotoButton>
      <StyledPicture>
        <StyledImage
          alt="Foto vom Restaurant"
          src={photos[photoIndex]}
          fill
          sizes="(min-width: 768px) 100vw"
          priority
        />
      </StyledPicture>
      <ToNextPhotoButton
        aria-label="zum nächsten Foto"
        onClick={handleToNextPhoto}
        photoIndex={photoIndex}
        photos={photos}
      >
        <Chevron_right
          alt="Sparren Icon nach rechts"
          color="#BA494B"
          size="30px"
        />
      </ToNextPhotoButton>
    </StyledSection>
  );
}
