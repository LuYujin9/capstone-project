import CommentCard from "../../components/CommentsList/CommentCard";
import Heading from "../../components/Heading";
import Footer from "../../components/Footer";
import { StyledMain } from "../../components/styles";
import useSWR from "swr";

export default function Comments({ username, onLogin }) {
  const { data: comments } = useSWR("/api/comments", {
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
        <ul>
          {matchingComments.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))}
        </ul>
      </StyledMain>
      <Footer />
    </>
  );
}
