import { FC } from "react";
import { Title } from "../../atoms/Title/Title";
import { Container } from "./styled-components";

const Header: FC = ({ children }) => {
  return (
    <Container>
      <Title as="h2">{children}</Title>
    </Container>
  );
};
export { Header };
