import styled from "styled-components";
import { spacing } from "../../static/spacing";
import { Button as ButtonAtom } from "../../atoms/Button/Button";

const Container = styled.div`
  border: 1px solid black;
  padding: ${spacing.sm};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`;

const Button = styled(ButtonAtom)`
  align-self: end;
`;

export { Container, Button };
