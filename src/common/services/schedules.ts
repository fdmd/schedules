import useSWR from "swr";
import { Schedule } from "../types/schedules";
import { getKeySchedule } from "./utils";
import { UpdateScheduleProps } from "./types";

export const useSchedulesService = <T>(endpoint: string) => {
  const { data, error, mutate } = useSWR<T[]>(endpoint);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const putSchedule = async (schedule: Schedule): Promise<Schedule> => {
  const response = await fetch(getKeySchedule({ id: schedule.id }), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schedule),
  });
  return response.json();
};

export const updateSchedule =
  ({ newSchedule }: UpdateScheduleProps) =>
  async (schedules?: Schedule[]) => {
    const result = await putSchedule(newSchedule);
    return schedules?.map((schedule: Schedule) =>
      newSchedule.id === schedule.id ? result : schedule
    );
  };

export const pollingInterval = 15000;
