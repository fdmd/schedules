import { useSWRConfig } from "swr";
import { Card } from "../../../atomic-ui/molecules/Card/Card";
import { Schedules } from "../../../atomic-ui/organisms/Schedules/Schedules";
import { Schedule } from "../../../common/types/schedules";
import { onButtonClick } from "./utils";
import { Props } from "./types";

export const SchedulesList = ({
  isLoading,
  schedulesList,
  onCardClick,
}: Props) => {
  const { mutate } = useSWRConfig();

  return isLoading ? (
    <div>loading schedules... </div>
  ) : (
    <Schedules>
      {schedulesList?.map((scheduleItem: Schedule) => {
        const { id, description, name, isRetired } = scheduleItem;
        return (
          <Card
            key={id}
            description={name}
            name={description}
            isRetired={isRetired}
            onClick={onCardClick({ id })}
            onButtonClick={onButtonClick({
              scheduleItem,
              schedulesList,
              mutate,
            })}
          />
        );
      })}
    </Schedules>
  );
};
