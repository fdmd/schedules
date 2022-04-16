import { OnClickEventType } from "../../../common/types/generic";

interface Props {
  name: string;
  description: string;
  isRetired: boolean;
  onButtonClick: OnClickEventType;
  onClick: OnClickEventType;
}

export type { Props };
