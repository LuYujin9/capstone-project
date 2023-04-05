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
  height: 30vh;
  position: relative;
  display: block;
`;

export const ToLastPhotoButton = styled.button`
  border: none;
  padding: 0;
  ${({ photoIndex }) => (photoIndex === 0 ? "visibility: hidden" : null)};
  background-color: white;
`;

export const ToNextPhotoButton = styled.button`
  border: none;
  padding: 0;
  ${({ photoIndex, photos }) =>
    photoIndex === photos.length - 1 ? "visibility: hidden" : null};
  background-color: white;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
