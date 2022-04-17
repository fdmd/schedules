import { ScheduleLog } from "../../common/types/schedules";

export interface Props {
  isLoading: boolean;
  isError: boolean;
  logs?: ScheduleLog[];
}
