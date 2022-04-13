import { StyledComponent } from "styled-components";

interface Props {
  as?: "h4" | "h2";
}

type StyledContainer = StyledComponent<"h4" | "h2", any, {}, never>;
export type { Props, StyledContainer };
