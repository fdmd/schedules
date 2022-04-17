import styled from "styled-components";
import { breakpoints, spacing } from "../../static/spacing";

export const Container = styled.div`
  display: flex;
  gap: ${spacing.md};
  flex-direction: column;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
`;
