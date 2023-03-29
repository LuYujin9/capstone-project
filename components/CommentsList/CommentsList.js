import styled from "styled-components";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentsList({ comments }) {
  return (
    <StyledUl>
      {comments.map((comment) => (
        <StyledLi key={comment.id} role="list">
          <CommentCard comment={comment.context} time={comment.time} />
        </StyledLi>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 0;
  list-style-type: none;
`;
