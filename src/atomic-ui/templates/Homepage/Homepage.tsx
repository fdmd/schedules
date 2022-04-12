import {
  Container,
  MainContentContainer,
  HeaderContainer,
  SideBarContainer,
} from "./styled-components";

interface Props {
  Header: JSX.Element;
  Sidebar: JSX.Element;
  MainContent: JSX.Element;
}

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
