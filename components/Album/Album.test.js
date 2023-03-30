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
  const photo = screen.getByRole("img", { name: /a photo of the restaurant/i });
  expect(photo).toHaveAttribute("alt", "a photo of the restaurant");
});

test("doesn't render toLastPhotoButton when it shows the first photo", () => {
  render(<Album photos={testPhotos} />);
  const toLastPhotoButton = screen.queryByText(/to the last photo/i);
  expect(toLastPhotoButton).not.toBeInTheDocument();
});

test("doesn't render toNextPhotoButton when it shows the last photo", async () => {
  const user = userEvent.setup();
  render(<Album photos={testPhotos} />);
  const toNextPhotoButton = screen.getByRole("button", {
    name: /to the next photo/i,
  });

  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);

  const ToNextPhotoButtonWithLastPhoto = screen.queryByRole("button", {
    name: /to the next photo/i,
  });
  expect(ToNextPhotoButtonWithLastPhoto).not.toBeInTheDocument();
});

//Problem  how to test "be called time", when the handle function is not a props.
test("renders toNextPhotoButton and toLastPhotoButton", async () => {
  const user = userEvent.setup();
  render(<Album photos={testPhotos} />);

  const toNextPhotoButton = screen.getByRole("button", {
    name: /to the next photo/i,
  });
  const handleToNextPhoto = jest.spyOn(Album, "handleToNextPhoto");

  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);

  const toLastPhotoButton = screen.getByRole("button", {
    name: /to the last photo/i,
  });
  const handleToLastPhoto = jest.spyOn(Album, "handleToLastPhoto");
  await user.click(toNextPhotoButton);

  expect(toNextPhotoButton).toBeInTheDocument();
  expect(toLastPhotoButton).toBeInTheDocument();
  expect(handleToNextPhoto).toHaveBeenCalledTimes(2);
  expect(handleToLastPhoto).toHaveBeenCalledTimes(1);
});
