import { render, screen } from "@testing-library/react";
import CommentCard from "./CommentCard";

const testComment1 = "sehr Lecker.";
("This restaurant is very picturesque. The sorrounding is relaxing, which makes it a great place to spend lunch with your boyfriend/girlfriend but also with your friends or family. The hausgemachte Limonade is fantastic. I tried the lemon one and it's very fresh and well done. Despite being a bit costly, the portion is big and satisfying. I suggest to take the Antipasti. The only down is the service, it could have been better. There were not enough cutlery and napkins for everyone.Ich kann es nur Empfehlen.");
const testTime = "Tue Jun 07 2023";

test("render the time and comment", () => {
  render(<CommentCard comment={testComment1} time={testTime} />);

  const comment = screen.getByText(/sehr Lecker./i);
  const time = screen.getByText(/Tue Jun 07 2023/i);

  expect(comment).toBeInTheDocument();
});

test("doesn't show the expand and collapse the comment button", () => {
  render(<CommentCard comment={testComment1} time={testTime} />);

  const button = screen.queryByText(/expand and collapse the comment button/i);

  expect(button).not.toBeInTheDocument();
});
