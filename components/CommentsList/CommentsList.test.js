import { render, screen } from "@testing-library/react";
import CommentsList from ".";
import useSWR from "swr";

jest.mock("swr");
const testComments = [
  {
    _id: "1",
    username: "Jane",
    restaurant_Id: "643c4c1554ed2e319028f9b2",
    restaurantName: "Carolaschlösschen",
    context: "sehr Lecker.",
    time: "Tue Jun 07 2023",
  },
  {
    _id: "2",
    username: "Jin",
    restaurant_Id: "643c4c1554ed2e319028f9b2",
    restaurantName: "Carolaschlösschen",
    context: "This restaurant is very picturesque. ",
    time: "Tue Jun 07 2023",
  },
];
beforeEach(() => {
  useSWR.mockImplementation((key, fetcher) => {
    const id = key.split("/").pop();
    const comment = testComments.find((comment) => comment._id === id);
    return {
      data: comment,
      error: null,
      isValidating: false,
    };
  });
});

test("render every comment with key", () => {
  render(<CommentsList comments={testComments} username="Jin" />);

  const comment1 = screen.getByText(/sehr Lecker./i);
  const comment2 = screen.getByText(/This restaurant is very picturesque./i);
  const list = screen.getAllByRole("listitem");

  expect(comment1).toBeInTheDocument();
  expect(comment2).toBeInTheDocument();
  expect(list).toHaveLength(2);
});
