import { MouseEvent } from "react";

interface Props {
  name: string;
  description: string;
  isRetired: boolean;
  onButtonClick: () => void;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

export type { Props };
