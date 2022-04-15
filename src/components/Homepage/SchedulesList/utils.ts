import { ScopedMutator } from "swr/dist/types";
import { updateSchedule } from "../../../common/services/schedules";
import { schedulesEndpoint } from "../../../common/services/utils";
import { Schedule } from "../../../common/types/schedules";

interface OnClickProps {
  scheduleItem: Schedule;
  schedulesList: Schedule[];
  mutate: ScopedMutator<Schedule>;
}

export const onButtonClick =
  ({ scheduleItem, schedulesList, mutate }: OnClickProps) =>
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

    const updater = updateSchedule({ newSchedule });
    // @ts-ignore
    mutate(schedulesEndpoint, updater, options);
  };
