import { render, screen } from "@testing-library/react";
import Album from "./Album";
import userEvent from "@testing-library/user-event";

const testPhotos = [
  "/images/Carolaschlösschen1.jpg",
  "/images/Carolaschlösschen2.jpg",
  "/images/Carolaschlösschen3.jpg",
];

test("Image has alt text", () => {
  render(<Album photos={testPhotos} />);
  const photo = screen.getAllByRole("img");
  expect(photo[0]).toHaveAttribute("alt", "a photo of the restaurant");
});

test("renders toNextPhotoButton", () => {
  const user = userEvent.setup();

  render(<Album photos={testPhotos} />);

  const toNextPhotoButton = screen.getByRole("button", {
    name: /to the next photo/i,
  });

  expect(toNextPhotoButton).toBeInTheDocument();
});
