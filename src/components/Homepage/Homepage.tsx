import { Card } from "../../atomic-ui/molecules/Card/Card";
import { HomepageTemplate } from "../../atomic-ui/templates/Homepage/Homepage";
import { useScheduleLogs, useSchedules } from "../../services/schedules";

import { GridList } from "../../atomic-ui/organisms/GridList/GridList";
import { Header } from "../../components/Header/Header";
import { Schedules } from "../../atomic-ui/organisms/Schedules/Schedules";
import { Tile } from "../../atomic-ui/molecules/Tile/Tile";
import { useEffect, useMemo, useState } from "react";

const Homepage = () => {
  const { data: dataSchedules } = useSchedules();
  const { data: dataScheduleLogs } = useScheduleLogs();

  const [selectedSchedule, setSelectedSchedule] = useState<
    undefined | number
  >();

  const [cardClicked, setCardClicked] = useState<EventTarget | null>(null);

  useEffect(() => {
    const onClickOutside = (e: Event) => {
      //@ts-ignore
      if (!cardClicked.contains(e.target)) {
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
    [selectedSchedule]
  );

  return (
    <div>
      <HomepageTemplate
        Header={<Header>Schedule</Header>}
        Sidebar={
          <Schedules>
            {dataSchedules?.map(({ id, description, name, isRetired }) => (
              <Card
                onClick={(e: Event) => {
                  //@ts-ignore
                  console.log("target", e.target.tagName);
                  setCardClicked(e.currentTarget);
                  //@ts-ignore
                  if (e.target.tagName !== "BUTTON") {
                    setSelectedSchedule(id);
                  }
                }}
                id={id}
                description={name}
                name={description}
                isRetired={isRetired}
                //@ts-ignore
                onButtonClick={(e) => console.log("id", e.currentTarget)}
              />
            ))}
          </Schedules>
        }
        MainContent={
          <GridList>
            {filteredLogs?.map(({ id, scheduleId, serverName, status }) => (
              <Tile
                id={id}
                scheduleId={scheduleId}
                serverName={serverName}
                status={status}
              />
            ))}
          </GridList>
        }
      />
    </div>
  );
};
export { Homepage };
