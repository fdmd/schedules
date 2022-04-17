import styled from "styled-components";
import { spacing } from "../../static/spacing";

export const Container = styled.div`
  display: grid;
  gap: ${spacing.md};
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
`;
