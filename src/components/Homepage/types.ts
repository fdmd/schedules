import { KeyedMutator } from "swr";
import { OnClickEventHandler } from "../../common/types/generic";
import { Schedule, ScheduleId } from "../../common/types/schedules";

export interface ButtonOnClickProps {
  scheduleItem: Schedule;
  schedulesList: Schedule[];
}

export interface ButtonOnClickPrepareProps {
  mutate: KeyedMutator<Schedule[]>;
}

export interface OnCardClickProps {
  id: ScheduleId;
}

export type OnCardClick = ({ id }: OnCardClickProps) => OnClickEventHandler;

export type OnClickPrepare = ({
  mutate,
}: ButtonOnClickPrepareProps) => ({
  scheduleItem,
  schedulesList,
}: ButtonOnClickProps) => OnClickEventHandler;
