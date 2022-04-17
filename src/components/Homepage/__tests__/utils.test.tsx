import { MouseEvent } from "react";
import { updateSchedule } from "../../../common/services/schedules";
import { buttonOnClickPrepare } from "../utils";
import { schedulesMock } from "../../../common/__mocks__/schedules";

jest.mock("../../../common/services/schedules", () => {
  return {
    updateSchedule: jest.fn(),
  };
});

test("homepage utils functions", () => {
  const mutateSpy = jest.fn();
  const scheduleItem = schedulesMock[0];
  const schedulesList = schedulesMock;
  const newScheduleProp = { newSchedule: scheduleItem };
  const updateCallback = jest.fn();
  (
    updateSchedule as jest.MockedFunction<typeof updateSchedule>
  ).mockImplementation(() => updateCallback);
  const eventHandler = buttonOnClickPrepare({ mutate: mutateSpy })({
    scheduleItem,
    schedulesList,
  });

  expect(mutateSpy).not.toHaveBeenCalled();
  eventHandler({} as MouseEvent<HTMLElement>);

  scheduleItem.isRetired = !scheduleItem.isRetired;
  expect(updateSchedule).toHaveBeenCalledWith(newScheduleProp);

  expect(mutateSpy).toHaveBeenCalledWith(updateCallback, {
    optimisticData: schedulesList,
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  });
});
