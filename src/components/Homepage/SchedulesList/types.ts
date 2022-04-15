import { MouseEvent } from "react";
import { Schedule, ScheduleId } from "../../../common/types/schedules";

export interface Props {
  isLoading: boolean;
  schedulesList?: Schedule[];
  onCardClick: ({
    id,
  }: {
    id: ScheduleId;
  }) => (e: MouseEvent<HTMLElement>) => void;
}
