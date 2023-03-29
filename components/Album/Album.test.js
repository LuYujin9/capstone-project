import { render, screen } from "@testing-library/react";
import Album from "./Album";

const testPhotos = [
  "/images/Carolaschlösschen1.jpg",
  "/images/Carolaschlösschen2.jpg",
  "/images/Carolaschlösschen3.jpg",
];

test("Image has alt text", () => {
  render(<Album photos={testPhotos} />);
  const photo = screen.getByRole("img", { name: /a photo of the restaurant/i });
  expect(photo).toHaveAttribute("alt", "a photo of the restaurant");
});

test("renders toNextPhotoButton", () => {
  render(<Album photos={testPhotos} />);

  const toNextPhotoButton = screen.getByRole("button", {
    name: /to the next photo/i,
  });

  expect(toNextPhotoButton).toBeInTheDocument();
});
