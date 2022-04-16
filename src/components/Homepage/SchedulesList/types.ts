import { OnClickEventType } from "../../../common/types/generic";
import { Schedule, ScheduleId } from "../../../common/types/schedules";
import { ButtonOnClickProps } from "../types";

export interface Props {
  isLoading: boolean;
  schedulesList?: Schedule[];
  onCardClick: ({ id }: { id: ScheduleId }) => OnClickEventType;
  onButtonClick: ({
    scheduleItem,
    schedulesList,
  }: ButtonOnClickProps) => OnClickEventType;
}
