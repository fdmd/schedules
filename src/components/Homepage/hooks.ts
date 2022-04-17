import { MouseEvent, useEffect, useMemo, useState } from "react";
import { ScheduleId, ScheduleLog } from "../../common/types/schedules";
import { OnCardClick, OnCardClickProps } from "./types";

interface FilterScheduleProps {
  dataScheduleLogs?: ScheduleLog[];
}

const useFilterSchedule = ({ dataScheduleLogs }: FilterScheduleProps) => {
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

  const onCardClick: OnCardClick =
    ({ id }: OnCardClickProps) =>
    (e: MouseEvent<HTMLElement>) => {
      setCardClicked(e.currentTarget);
      if ((e.target as HTMLElement).tagName !== "BUTTON") {
        setSelectedSchedule(id);
      }
    };

  return { filteredLogs, onCardClick };
};

export { useFilterSchedule };
