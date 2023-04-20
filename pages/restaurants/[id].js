import styled from "styled-components";
import Link from "next/link";
import { StyledMain } from "../../components/styles";
import CommentsList from "../../components/CommentsList";
import Album from "../../components/Album";
import Heading from "../../components/Heading";
import ToReservePageLink from "../../components/ToReservePageLink";
import BookmarkButton from "../../components/BookmarkButton";
import CommentForm from "../../components/CommentForm";
import { ArrowUpRightIcon } from "../../public/icons";
import { useRouter } from "next/router";
import { postNewData } from "../../utils/handleDataUtils";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Details({ onToggleFavorite, username, onLogin }) {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: restaurant,
    isLoading,
    error,
  } = useSWR(id ? `/api/restaurants/${id}` : null);
  const { data: userInfos } = useSWR("/api/user-infos", {
    fallbackData: [],
  });
  const { data: comments, mutate } = useSWR("/api/comments", {
    fallbackData: [],
  });
  const { trigger: triggerComment } = useSWRMutation(
    "/api/comments",
    postNewData
  );
  if (!userInfos || !restaurant || !comments || isLoading || error)
    return <h2>Loading</h2>;

  const matchingUserInfo = userInfos?.find(
    (info) => info.restaurantId === id && info.username === username
  );
  const isFavorite = matchingUserInfo ? matchingUserInfo.isFavorite : false;
  const matchingComments = comments
    .filter((comment) => comment.restaurant_Id === restaurant._id)
    .reverse();

  function handleToggleBookmark() {
    const newIsFavorite = !isFavorite;
    onToggleFavorite(matchingUserInfo, newIsFavorite, restaurant, username);
  }
  async function addNewComment(formattedtime, comment, restaurant, username) {
    const newComment = {
      username: username,
      restaurant_Id: restaurant._id,
      restaurantName: restaurant.name,
      context: comment.context,
      time: formattedtime,
    };

    await triggerComment(newComment);
  }

  return (
    <>
      <Heading username={username} onLogin={onLogin}>
        {restaurant.name}
      </Heading>
      <StyledMain>
        <LinkToMenu href={`/restaurants/menu/${id}`}>
          Zur Speisekarte{" "}
          <ArrowUpRightIcon
            alt="Pfeil Icon nach oben rechts"
            color="var(--white-color)"
          />
        </LinkToMenu>
        <BookmarkButton
          onToggleBookmark={handleToggleBookmark}
          isFavorite={isFavorite}
        />
        <Album photos={restaurant.photos} />
        <StyledParagraph>{restaurant.description}</StyledParagraph>
        <StyledParagraph>
          <b>Tel: </b>
          {restaurant.telephoneNumber}
        </StyledParagraph>
        <StyledParagraph>
          <b>Addresse: </b>
          {restaurant.address}
        </StyledParagraph>
        <CommentForm
          restaurant={restaurant}
          username={username}
          addNewComment={addNewComment}
        />
        <CommentsList
          comments={matchingComments}
          mutateComments={mutate}
          username={username}
        />
        <ToReservePageLink id={id} />
      </StyledMain>
    </>
  );
}

const StyledParagraph = styled.p`
  padding: 0.3rem 0;
  margin: 0;
  width: 90%;
  text-align: left;
`;
const LinkToMenu = styled(Link)`
  padding: 0.15rem 0.5rem;
  width: 15rem;
  margin: 0;
  font-size: 1rem;
  text-decoration: none;

  display: flex;
  justify-content: center;
  position: fixed;
  top: 3rem;
  right: auto;
  left: auto;
  z-index: 3;

  border-radius: 0 0 30px 30px;
  color: var(--white-color);
  background-color: var(--button-color);

  &:hover {
    background-color: var(--frame-color);
  }
`;
