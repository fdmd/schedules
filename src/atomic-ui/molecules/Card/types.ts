import { OnClickEventHandler } from "../../../common/types/generic";

interface Props {
  name: string;
  description: string;
  isRetired: boolean;
  onButtonClick: OnClickEventHandler;
  onClick: OnClickEventHandler;
}

export type { Props };
