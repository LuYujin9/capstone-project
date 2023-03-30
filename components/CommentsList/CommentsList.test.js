import { render, screen } from "@testing-library/react";
import CommentsList from "./CommentsList";

const testComments = [
  {
    id: "1",
    context: "sehr Lecker.",
    time: "Tue Jun 08 2023",
  },
  {
    id: "2",
    context: "This restaurant is very picturesque.",
    time: "Tue Jun 07 2023",
  },
];

test("render every comment with key", () => {
  render(<CommentsList comments={testComments} />);

  const comment1 = screen.getByText(/sehr Lecker./i);
  const comment2 = screen.getByText(/This restaurant is very picturesque./i);
  const list = screen.getAllByRole("listitem");

  expect(comment1).toBeInTheDocument();
  expect(comment2).toBeInTheDocument();
  expect(list).toHaveLength(2);
});
