import { useState } from "react";
import ChevronLeftIcon from "../../public/icons/chevron_left";
import ChevronRightIcon from "../../public/icons/chevron_right";
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
        <ChevronLeftIcon
          alt="Pfeil Icon nach links"
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
        <ChevronRightIcon
          alt="Pfeil Icon nach rechts"
          color="#BA494B"
          size="30px"
        />
      </ToNextPhotoButton>
    </StyledSection>
  );
}
