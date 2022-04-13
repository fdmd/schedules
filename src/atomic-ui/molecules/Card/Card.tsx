import { FC } from "react";
import { Title } from "../../atoms/Title/Title";
import { Container } from "./styled-components";
import { Props } from "./types";

export const Card: FC<Props> = ({
  id,
  name,
  description,
  isRetired,
  onButtonClick,
  onClick,
}) => {
  return (
    //@ts-ignore
    <Container onClick={onClick} key={id}>
      <Title>{name}</Title>
      <div>{description}</div>
      <button type="button" onClick={onButtonClick}>
        {isRetired ? "unretire" : "retire"}
      </button>
    </Container>
  );
};
