import { render } from "@testing-library/react";
import { Header } from "../../../atomic-ui/molecules/Header/Header";
import { useSchedulesService } from "../../../common/services/schedules";
import { Homepage } from "../Homepage";
import { useFilterSchedule } from "../hooks";
import { LogsList } from "../LogsList/LogsList";
import { SchedulesList } from "../SchedulesList/SchedulesList";
import { OnCardClick, OnClickPrepare } from "../types";
import { buttonOnClickPrepare } from "../utils";
import { scheduleLogsMock } from "../../../common/__mocks__/schedules";

jest.mock("../hooks", () => {
  return {
    useFilterSchedule: jest.fn(),
  };
});

jest.mock("../utils", () => {
  return {
    buttonOnClickPrepare: jest.fn(),
  };
});

jest.mock("../../../common/services/schedules", () => {
  return {
    useSchedulesService: jest.fn(),
  };
});

jest.mock("../../../atomic-ui/molecules/Header/Header", () => {
  return {
    Header: jest.fn(),
  };
});

jest.mock("../SchedulesList/SchedulesList", () => {
  return {
    SchedulesList: jest.fn(),
  };
});

jest.mock("../LogsList/LogsList", () => {
  return {
    LogsList: jest.fn(),
  };
});

test("Homepage loads correctly", () => {
  const mutateSpy = jest.fn();
  const buttonClickPrepareSpy = jest.fn(() => "button click function");
  const onCardClickSpy = jest.fn(() => "card click function");
  const filteredLogsMock = [scheduleLogsMock[0], scheduleLogsMock[2]];

  (
    useSchedulesService as jest.MockedFunction<typeof useSchedulesService>
  ).mockImplementation(() => ({
    data: undefined,
    isLoading: true,
    mutate: mutateSpy,
    isError: null,
  }));

  (
    useFilterSchedule as jest.MockedFunction<typeof useFilterSchedule>
  ).mockImplementationOnce(() => ({
    filteredLogs: filteredLogsMock,
    onCardClick: onCardClickSpy as unknown as OnCardClick,
  }));

  (
    buttonOnClickPrepare as jest.MockedFunction<typeof buttonOnClickPrepare>
  ).mockImplementationOnce(buttonClickPrepareSpy as unknown as OnClickPrepare);

  render(<Homepage />);

  expect(Header).toHaveBeenCalledWith({ children: "Schedule" }, {});

  expect(SchedulesList).toHaveBeenCalledWith(
    {
      isLoading: true,
      schedulesList: undefined,
      onCardClick: onCardClickSpy,
      onButtonClick: "button click function",
    },
    {}
  );

  expect(LogsList).toHaveBeenCalledWith(
    {
      isLoading: true,
      logs: filteredLogsMock,
    },
    {}
  );

  expect(buttonClickPrepareSpy).toHaveBeenCalledWith({ mutate: mutateSpy });

  expect(useSchedulesService).toHaveBeenCalledTimes(2);
  expect(useSchedulesService).toHaveBeenCalledWith(
    "http://localhost:3000/schedules"
  );
  expect(useSchedulesService).toHaveBeenCalledWith(
    "http://localhost:3000/scheduleLogs"
  );
});
