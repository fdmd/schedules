import { updateSchedule } from "../../common/services/schedules";
import { Schedule } from "../../common/types/schedules";
import {
  ButtonOnClickPrepareProps,
  ButtonOnClickProps,
  OnClickPrepare,
} from "./types";

export const buttonOnClickPrepare: OnClickPrepare =
  ({ mutate }: ButtonOnClickPrepareProps) =>
  ({ scheduleItem, schedulesList }: ButtonOnClickProps) =>
  () => {
    const newSchedule: Schedule = {
      ...scheduleItem,
      isRetired: !scheduleItem.isRetired,
    };

    const newSchedules = schedulesList?.map((schedule: Schedule) =>
      scheduleItem.id === schedule.id ? newSchedule : schedule
    );

    const options = {
      optimisticData: newSchedules,
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };

    mutate(updateSchedule({ newSchedule }), options);
  };
