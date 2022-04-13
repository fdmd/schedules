import useSWR, { SWRResponse } from "swr";
import { Schedule, ScheduleLog } from "../common/types";

export const useSchedules = () => {
  const { data, error }: SWRResponse<Schedule[], any> = useSWR(
    "http://localhost:3000/schedules"
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useScheduleLogs = () => {
  const { data, error }: SWRResponse<ScheduleLog[], any> = useSWR(
    "http://localhost:3000/scheduleLogs"
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
