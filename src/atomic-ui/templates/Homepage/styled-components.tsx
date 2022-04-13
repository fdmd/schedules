import styled from "styled-components";
import { spacing } from "../../static/spacing";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${spacing.lg};
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    "sb sb sb mc mc mc mc mc mc mc mc mc";
  padding: ${spacing.xl};
`;

export const SideBarContainer = styled.div`
  max-height: 500px;
  overflow: auto;
  grid-area: sb;
`;

export const HeaderContainer = styled.header`
  grid-area: hd;
`;

export const MainContentContainer = styled.main`
  grid-area: mc;
  max-height: 500px;
  overflow: auto;
`;
