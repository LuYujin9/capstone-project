import { render, screen } from "@testing-library/react";
import CommentCard from ".";

const testComment = {
  context: "sehr Lecker.",
  time: "Tue Jun 07 2023",
  username: "Jin",
};

test("render the time and comment", () => {
  render(<CommentCard comment={testComment} />);

  const context = screen.getByText(/sehr Lecker./i);
  const time = screen.getByText(/Tue Jun 07 2023/i);
  const username = screen.getByText(/Jin/i);

  expect(context).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(username).toBeInTheDocument();
});

test("doesn't show the button when the comment is short ", () => {
  render(<CommentCard comment={testComment} />);

  const button = screen.queryByText(
    /Button zu Kommentare erweitern und reduzieren/i
  );

  expect(button).not.toBeInTheDocument();
});
