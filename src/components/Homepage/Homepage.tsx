import { HomepageTemplate } from "../../atomic-ui/templates/Homepage/Homepage";
import { useSchedulesService } from "../../common/services/schedules";
import {
  schedulesEndpoint,
  schedulesLogsEndpoint,
} from "../../common/services/utils";
import { Schedule, ScheduleLog } from "../../common/types/schedules";
import { Header } from "../../atomic-ui/molecules/Header/Header";
import { useFilterSchedule } from "./hooks";
import { LogsList } from "../LogsList/LogsList";
import { SchedulesList } from "../SchedulesList/SchedulesList";
import { buttonOnClickPrepare } from "./utils";

const Homepage = () => {
  const {
    data: dataSchedules,
    isLoading: isLoadingSchedules,
    isError: isErrorSchedules,
    mutate: mutateSchedules,
  } = useSchedulesService<Schedule>(schedulesEndpoint);

  const {
    data: dataScheduleLogs,
    isLoading: isLoadingScheduleLogs,
    isError: isErrorScheduleLogs,
  } = useSchedulesService<ScheduleLog>(schedulesLogsEndpoint);

  const { onCardClick, filteredLogs } = useFilterSchedule({ dataScheduleLogs });

  return (
    <HomepageTemplate
      Header={<Header>Schedule</Header>}
      Sidebar={
        <SchedulesList
          isError={isErrorSchedules}
          isLoading={isLoadingSchedules}
          schedulesList={dataSchedules}
          onCardClick={onCardClick}
          onButtonClick={buttonOnClickPrepare({ mutate: mutateSchedules })}
        />
      }
      MainContent={
        <LogsList
          isError={isErrorScheduleLogs}
          isLoading={isLoadingScheduleLogs}
          logs={filteredLogs}
        />
      }
    />
  );
};
export { Homepage };
