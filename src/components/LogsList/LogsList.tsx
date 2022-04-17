import { Props } from "./types";
import { Tile } from "../../atomic-ui/molecules/Tile/Tile";
import { GridList } from "../../atomic-ui/organisms/GridList/GridList";

export const LogsList = ({ isLoading, logs, isError }: Props) => {
  if (isError) {
    return <div>error retrieving logs... </div>;
  }
  if (isLoading) {
    return <div>loading logs...</div>;
  }
  return (
    <GridList>
      {logs?.map(({ id, scheduleId, serverName, status }) => (
        <Tile
          key={id}
          scheduleId={scheduleId}
          serverName={serverName}
          status={status}
        />
      ))}
    </GridList>
  );
};
