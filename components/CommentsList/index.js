import styled from "styled-components";
import CommentCard from "./CommentCard";

export default function CommentsList({ comments }) {
  return (
    <StyledList role="list">
      {comments.map((comment) => (
        <StyledListItem key={comment.id}>
          <CommentCard comment={comment.context} time={comment.time} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledListItem = styled.li`
  margin: 0;
  list-style-type: none;
`;

const StyledList = styled.ul`
  margin-bottom: 4rem;
`;
