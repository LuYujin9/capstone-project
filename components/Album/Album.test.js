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
  const photo = screen.getByRole("img", { name: /Foto vom Restaurant/i });
  expect(photo).toHaveAttribute("alt", "Foto vom Restaurant");
});

test("doesn't render toLastPhotoButton when it shows the first photo", () => {
  render(<Album photos={testPhotos} />);
  const toLastPhotoButton = screen.queryByText(/zum letzten Foto/i);
  expect(toLastPhotoButton).not.toBeInTheDocument();
});

test("doesn't render toNextPhotoButton when it shows the last photo", async () => {
  const user = userEvent.setup();
  render(<Album photos={testPhotos} />);
  const toNextPhotoButton = screen.getByRole("button", {
    name: /zum nächsten Foto/i,
  });

  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);

  const ToNextPhotoButtonWithLastPhoto = screen.queryByRole("button", {
    name: /zum nächsten Foto/i,
  });
  expect(ToNextPhotoButtonWithLastPhoto).not.toBeInTheDocument();
});

test("renders toNextPhotoButton and toLastPhotoButton", async () => {
  const user = userEvent.setup();
  render(<Album photos={testPhotos} />);

  const toNextPhotoButton = screen.getByRole("button", {
    name: /zum nächsten Foto/i,
  });

  await user.click(toNextPhotoButton);
  await user.click(toNextPhotoButton);

  const toLastPhotoButton = screen.getByRole("button", {
    name: /zum letzten Foto/i,
  });

  await user.click(toNextPhotoButton);

  expect(toNextPhotoButton).toBeInTheDocument();
  expect(toLastPhotoButton).toBeInTheDocument();
});
