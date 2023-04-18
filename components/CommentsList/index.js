import styled from "styled-components";
import CommentCard from "./CommentCard";

export default function CommentsList({ comments }) {
  return (
    <StyledList role="list">
      {comments?.map((comment) => (
        <StyledListItem key={comment._id}>
          <CommentCard comment={comment} />
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
  margin-top: 0;
  margin-bottom: 4rem;
`;
