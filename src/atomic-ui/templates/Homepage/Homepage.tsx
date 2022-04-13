import { Props } from "./types";
import {
  Container,
  MainContentContainer,
  HeaderContainer,
  SideBarContainer,
} from "./styled-components";

const HomepageTemplate = ({ Header, MainContent, Sidebar }: Props) => {
  return (
    <Container>
      <HeaderContainer>{Header}</HeaderContainer>
      <SideBarContainer>{Sidebar}</SideBarContainer>
      <MainContentContainer>{MainContent}</MainContentContainer>
    </Container>
  );
};

export { HomepageTemplate };
