import { render, screen } from "@testing-library/react";
import CommentCard from ".";

const testComment = "sehr Lecker.";
const testTime = "Tue Jun 07 2023";

test("render the time and comment", () => {
  render(<CommentCard comment={testComment} time={testTime} />);

  const comment = screen.getByText(/sehr Lecker./i);
  const time = screen.getByText(/Tue Jun 07 2023/i);

  expect(comment).toBeInTheDocument();
  expect(time).toBeInTheDocument();
});

test("doesn't show the button when the comment is short ", () => {
  render(<CommentCard comment={testComment} time={testTime} />);

  const button = screen.queryByText(
    /Knopf zu Kommentare erweitern und reduzieren/i
  );

  expect(button).not.toBeInTheDocument();
});
