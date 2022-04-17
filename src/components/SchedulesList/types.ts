import { OnClickEventHandler } from "../../common/types/generic";
import { Schedule } from "../../common/types/schedules";
import { ButtonOnClickProps, OnCardClickProps } from "../Homepage/types";

export interface Props {
  isLoading: boolean;
  isError: boolean;
  schedulesList?: Schedule[];
  onCardClick: ({ id }: OnCardClickProps) => OnClickEventHandler;
  onButtonClick: ({
    scheduleItem,
    schedulesList,
  }: ButtonOnClickProps) => OnClickEventHandler;
}
