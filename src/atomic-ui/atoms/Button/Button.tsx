import { FC } from "react";
import { Props } from "./types";
import { Container } from "./styled-components";

const Button: FC<Props> = ({ onClick, children, className }) => (
  <Container className={className} type="button" onClick={onClick}>
    {children}
  </Container>
);

export { Button };
