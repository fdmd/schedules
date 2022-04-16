import { KeyedMutator } from "swr";
import { Schedule } from "../../common/types/schedules";

export interface ButtonOnClickProps {
  scheduleItem: Schedule;
  schedulesList: Schedule[];
}

export interface ButtonOnClickPrepareProps {
  mutate: KeyedMutator<Schedule[]>;
}
