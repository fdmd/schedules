import { HomepageTemplate } from "../../atomic-ui/templates/Homepage/Homepage";
import { useSchedulesService } from "../../common/services/schedules";
import {
  schedulesEndpoint,
  schedulesLogsEndpoint,
} from "../../common/services/utils";
import { Schedule, ScheduleLog } from "../../common/types/schedules";
import { Header } from "../../atomic-ui/molecules/Header/Header";
import { useFilterSchedule } from "./hooks";
import { LogsList } from "./LogsList/LogsList";
import { SchedulesList } from "./SchedulesList/SchedulesList";

const Homepage = () => {
  const { data: dataSchedules, isLoading: isLoadingSchedules } =
    useSchedulesService<Schedule>(schedulesEndpoint);

  const { data: dataScheduleLogs, isLoading: isLoadingScheduleLogs } =
    useSchedulesService<ScheduleLog>(schedulesLogsEndpoint);

  const { onCardClick, filteredLogs } = useFilterSchedule({ dataScheduleLogs });

  return (
    <HomepageTemplate
      Header={<Header>Schedule</Header>}
      Sidebar={
        <SchedulesList
          isLoading={isLoadingSchedules}
          schedulesList={dataSchedules}
          onCardClick={onCardClick}
        />
      }
      MainContent={
        <LogsList isLoading={isLoadingScheduleLogs} logs={filteredLogs} />
      }
    />
  );
};
export { Homepage };
