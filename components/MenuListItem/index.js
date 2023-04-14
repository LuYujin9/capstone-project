import styled from "styled-components";

export default function MenuListItem({ food }) {
  return (
    <StyledListItem>
      <FoodName>{food.name}</FoodName>
      <Description>{food.description}</Description>
      <Price>{food.price}€</Price>
    </StyledListItem>
  );
}

const FoodName = styled.p`
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0 5px;
  font-size: 14px;
`;

const Price = styled.p`
  align-self: end;
`;

const StyledListItem = styled.li`
  width: 94%;
  margin: 0 auto;
  padding: 0.3rem;

  display: flex;
  flex-direction: column;

  list-style-type: none;
`;
