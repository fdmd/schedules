import { FC } from "react";
import { Title } from "../../atoms/Title/Title";
import { Container, Button } from "./styled-components";
import { Props } from "./types";

export const Card: FC<Props> = ({
  name,
  description,
  isRetired,
  onButtonClick,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Title>{name}</Title>
      <div>{description}</div>

      <Button onClick={onButtonClick}>
        {isRetired ? "unretire" : "retire"}
      </Button>
    </Container>
  );
};
