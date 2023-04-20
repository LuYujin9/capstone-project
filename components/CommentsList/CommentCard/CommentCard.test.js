import { render, screen } from "@testing-library/react";
import CommentCard from ".";
import useSWR from "swr";

jest.mock("swr");
const testComment = {
  _id: "643e8d9aa8ca46a380fe0455",
  username: "Jane",
  restaurant_Id: "643c4c1554ed2e319028f9b2",
  restaurantName: "Good Friends",
  context: "Das is the best Restaurant.",
  time: "Di., 18. Apr. 2023, 14 Uhr",
};
beforeEach(() => {
  useSWR.mockImplementation((key, fetcher, options) => {
    return {
      data: testComment,
      error: undefined,
      isValidating: false,
      revalidate: jest.fn(),
    };
  });
});

test("render the time and comment", async () => {
  render(<CommentCard id={testComment._id} username="Jane" />);
  await screen.findByText(/Das is the best Restaurant./i);

  const context = screen.getByText(/Das is the best Restaurant./i);
  const time = screen.getByText(/Di., 18. Apr. 2023, 14 Uhr/i);
  const username = screen.getByText(/Jane/i);

  expect(context).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(username).toBeInTheDocument();
});

test("doesn't show the button when the comment is short ", () => {
  render(<CommentCard id={testComment._id} username="Jane" />);

  const button = screen.queryByText(
    /Button zu Kommentare erweitern und reduzieren/i
  );

  expect(button).not.toBeInTheDocument();
});
