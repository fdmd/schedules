import { HomepageTemplate } from "../../atomic-ui/templates/Homepage/Homepage";
import { useScheduleLogs, useSchedules } from "../../hooks/schedulesAPI";

import { GridList } from "../GridList/GridList";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

const Homepage = () => {
  const { data: dataSchedules } = useSchedules();
  const { data: dataScheduleLogs } = useScheduleLogs();

  return (
    <HomepageTemplate
      Header={<Header></Header>}
      Sidebar={
        <Sidebar>
          <div>{JSON.stringify(dataSchedules)}</div>
        </Sidebar>
      }
      MainContent={<GridList>{JSON.stringify(dataScheduleLogs)}</GridList>}
    />
  );
};
export { Homepage };
