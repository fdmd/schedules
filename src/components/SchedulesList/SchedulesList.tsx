import { Card } from "../../atomic-ui/molecules/Card/Card";
import { Schedules } from "../../atomic-ui/organisms/Schedules/Schedules";
import { Schedule } from "../../common/types/schedules";
import { Props } from "./types";

export const SchedulesList = ({
  isError,
  isLoading,
  schedulesList,
  onCardClick,
  onButtonClick,
}: Props) => {
  if (isError) {
    return <div>error retrieving schedules... </div>;
  }
  if (isLoading) {
    return <div>loading schedules... </div>;
  }
  return (
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
            })}
          />
        );
      })}
    </Schedules>
  );
};
