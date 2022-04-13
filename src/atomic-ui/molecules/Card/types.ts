import { MouseEventHandler } from "react";

interface Props {
  name: string;
  description: string;
  id: number;
  isRetired: boolean;
  onButtonClick: () => void;
  onClick: (e: Event) => void;
}

export type { Props };
