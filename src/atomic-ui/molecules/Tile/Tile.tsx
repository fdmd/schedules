import { FC } from "react";
import { Title } from "../../atoms/Title/Title";
import { Container } from "./styled-components";
import { Props } from "./types";

export const Tile: FC<Props> = ({ scheduleId, serverName, status }) => {
  return (
    <Container>
      <Title>{serverName}</Title>
      <div>{scheduleId}</div>
      <div>{status}</div>
    </Container>
  );
};
