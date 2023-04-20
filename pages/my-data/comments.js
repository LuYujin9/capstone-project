import CommentsList from "../../components/CommentsList";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/styles";
import useSWR from "swr";

export default function Comments({ username, onLogin }) {
  const { data: comments, mutate } = useSWR("/api/comments", {
    fallbackData: [],
  });
  const matchingComments = comments.filter(
    (comment) => comment.username === username
  );
  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        Meine Kommentare
      </Heading>
      <StyledMain>
        <CommentsList
          comments={matchingComments}
          mutateComments={mutate}
          username={username}
          isInMyData={true}
        />
      </StyledMain>
      <Footer />
    </>
  );
}
