import styled from "styled-components";
import CommentCard from "./CommentCard";

export default function CommentsList({
  comments,
  username,
  mutateComments,
  isInMyData,
}) {
  return (
    <StyledList role="list">
      {comments?.map((comment) => (
        <StyledListItem key={comment._id}>
          <CommentCard
            id={comment._id}
            username={username}
            mutateComments={mutateComments}
            isInMyData={isInMyData}
          />
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
  width: 90%;
  margin-top: 0;
  margin-bottom: 4rem;

  @media only screen and (min-width: 650px) {
    width: 36.5em;
  }
`;
