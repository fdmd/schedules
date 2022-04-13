import { FC } from "react";
import { Container } from "./styled-components";
import { Props } from "./types";

export const Title: FC<Props> = ({ children, as }) => {
  return <Container as={as}>{children}</Container>;
};
