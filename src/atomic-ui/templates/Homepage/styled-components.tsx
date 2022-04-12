import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(11, fr);
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    "sb sb sb mc mc mc mc mc mc mc mc mc";
`;

export const SideBarContainer = styled.div`
  grid-area: sb;
`;

export const HeaderContainer = styled.header`
  grid-area: hd;
`;

export const MainContentContainer = styled.main`
  grid-area: mc;
`;
