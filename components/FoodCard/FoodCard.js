import styled from "styled-components";

export default function MenuCard({ food }) {
  return (
    <>
      <StyledFoodCard>
        <p>{food.name}</p>
        <StyledParagraph>{food.description}</StyledParagraph>
        <Price>{food.price}€</Price>
      </StyledFoodCard>
    </>
  );
}

const StyledFoodCard = styled.article`
width:100%;
margin:0.5rem;
padding:0.3rem;

display:flex;
flex-direction:column;


border-radius:10px;
background-color= white;
`;

const StyledParagraph = styled.p`
  margin: 0 5px;
  font-size: 14px;
`;

const Price = styled.p`
  align-self: end;
`;
