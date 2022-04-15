import { MouseEvent, useEffect, useMemo, useState } from "react";
import { ScheduleId, ScheduleLog } from "../../common/types/schedules";

const useFilterSchedule = ({
  dataScheduleLogs,
}: {
  dataScheduleLogs?: ScheduleLog[];
}) => {
  const [selectedSchedule, setSelectedSchedule] = useState<undefined | number>(
    undefined
  );
  const [cardClicked, setCardClicked] = useState<EventTarget | null>();

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      if (
        !cardClicked ||
        !(cardClicked as HTMLElement).contains(e.target as HTMLElement)
      ) {
        setSelectedSchedule(undefined);
      }
    };

    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [cardClicked]);

  const filteredLogs = useMemo(
    () =>
      selectedSchedule
        ? dataScheduleLogs?.filter(
            (item) => item.scheduleId === selectedSchedule
          )
        : dataScheduleLogs,
    [selectedSchedule, dataScheduleLogs]
  );

  const onCardClick =
    ({ id }: { id: ScheduleId }) =>
    (e: MouseEvent) => {
      setCardClicked(e.currentTarget);
      if ((e.target as HTMLElement).tagName !== "BUTTON") {
        setSelectedSchedule(id);
      }
    };

  return { filteredLogs, onCardClick };
};

export { useFilterSchedule };
