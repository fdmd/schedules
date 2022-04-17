import { OnClickEventHandler } from "../../../common/types/generic";
import { Schedule, ScheduleId } from "../../../common/types/schedules";
import { ButtonOnClickProps, OnCardClickProps } from "../types";

export interface Props {
  isLoading: boolean;
  schedulesList?: Schedule[];
  onCardClick: ({ id }: OnCardClickProps) => OnClickEventHandler;
  onButtonClick: ({
    scheduleItem,
    schedulesList,
  }: ButtonOnClickProps) => OnClickEventHandler;
}
