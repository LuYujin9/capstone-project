import styled from "styled-components";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentsList({ comments }) {
  console.log("render me");
  return (
    <ul>
      {comments.map((comment) => (
        <StyledList key={comment.id} role="list">
          <CommentCard comment={comment.context} time={comment.time} />
        </StyledList>
      ))}
    </ul>
  );
}

const StyledList = styled.li`
  margin: 0;
  list-style-type: none;
`;
