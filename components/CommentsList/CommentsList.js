import styled from "styled-components";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentsList({ comments }) {
  return (
    <ul role="list">
      {comments.map((comment) => (
        <StyledListItem key={comment.id}>
          <CommentCard comment={comment.context} time={comment.time} />
        </StyledListItem>
      ))}
    </ul>
  );
}

const StyledListItem = styled.li`
  margin: 0;
  list-style-type: none;
`;
