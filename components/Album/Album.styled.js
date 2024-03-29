import styled from "styled-components";
import Image from "next/image";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledPicture = styled.picture`
  width: 90%;
  margin: 0.5rem 0;
  margin-top: 3rem;
  height: 30vh;
  position: relative;
  display: block;

  @media only screen and (min-width: 769px) {
    height: 50vh;
  }
`;

export const ToLastPhotoButton = styled.button`
  width: 5%;
  border: none;
  padding: 0;
  ${({ photoIndex }) => (photoIndex === 0 ? "visibility: hidden" : null)};
  background-color: var(--background-color);
`;

export const ToNextPhotoButton = styled.button`
  width: 5%;
  border: none;
  padding: 0;
  ${({ photoIndex, photos }) =>
    photoIndex === photos.length - 1 ? "visibility: hidden" : null};
  background-color: var(--background-color);
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
