import { FC } from "react";
import { Container } from "./styled-components";

const Sidebar: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
export { Sidebar };
