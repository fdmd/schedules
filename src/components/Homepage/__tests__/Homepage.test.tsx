import { render } from "@testing-library/react";
import { Header } from "../../../atomic-ui/molecules/Header/Header";
import { useSchedulesService } from "../../../common/services/schedules";
import { Homepage } from "../Homepage";
import { useFilterSchedule } from "../hooks";
import { LogsList } from "../../LogsList/LogsList";
import { SchedulesList } from "../../SchedulesList/SchedulesList";
import { OnCardClick, OnClickPrepare } from "../types";
import { buttonOnClickPrepare } from "../utils";
import {
  scheduleLogsMock,
  schedulesMock,
} from "../../../common/__mocks__/schedules";

jest.mock("../hooks", () => {
  return {
    useFilterSchedule: jest.fn(() => jest.requireActual("../hooks")),
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

jest.mock("../../SchedulesList/SchedulesList", () => {
  return {
    SchedulesList: jest.fn(),
  };
});

jest.mock("../../LogsList/LogsList", () => {
  return {
    LogsList: jest.fn(),
  };
});

describe("Homepage loads correctly", () => {
  const filteredLogsMock = [scheduleLogsMock[0], scheduleLogsMock[2]];
  let mutateSpy = jest.fn();
  let buttonClickPrepareSpy = jest.fn(() => "button click function");
  let onCardClickSpy = jest.fn(() => "card click function");
  const serviceScheduleMock = useSchedulesService as jest.MockedFunction<
    typeof useSchedulesService
  >;

  beforeEach(() => {
    mutateSpy = jest.fn();
    buttonClickPrepareSpy = jest.fn(() => "button click function");
    onCardClickSpy = jest.fn(() => "card click function");

    serviceScheduleMock.mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      mutate: mutateSpy,
      isError: false,
    }));

    (
      useFilterSchedule as jest.MockedFunction<typeof useFilterSchedule>
    ).mockImplementation(() => ({
      filteredLogs: filteredLogsMock,
      onCardClick: onCardClickSpy as unknown as OnCardClick,
    }));

    (
      buttonOnClickPrepare as jest.MockedFunction<typeof buttonOnClickPrepare>
    ).mockImplementation(buttonClickPrepareSpy as unknown as OnClickPrepare);
  });

  test("renders header correctly", () => {
    render(<Homepage />);
    expect(Header).toHaveBeenCalledWith({ children: "Schedule" }, {});
  });

  test("renders schedule list loading", () => {
    render(<Homepage />);

    expect(SchedulesList).toHaveBeenCalledWith(
      {
        isLoading: true,
        isError: false,
        schedulesList: undefined,
        onCardClick: onCardClickSpy,
        onButtonClick: "button click function",
      },
      {}
    );
  });

  test("renders logs list loading", () => {
    render(<Homepage />);
    expect(LogsList).toHaveBeenCalledWith(
      {
        isError: false,
        isLoading: true,
        logs: filteredLogsMock,
      },
      {}
    );
  });

  test("hook calls", () => {
    render(<Homepage />);

    expect(buttonClickPrepareSpy).toHaveBeenCalledWith({ mutate: mutateSpy });

    expect(useSchedulesService).toHaveBeenCalledTimes(2);
    expect(useSchedulesService).toHaveBeenCalledWith(
      "http://localhost:3000/schedules"
    );
    expect(useSchedulesService).toHaveBeenCalledWith(
      "http://localhost:3000/scheduleLogs"
    );
  });

  test("renders schedule list with data", () => {
    serviceScheduleMock.mockImplementation(() => ({
      data: schedulesMock,
      isLoading: false,
      mutate: mutateSpy,
      isError: false,
    }));

    render(<Homepage />);
    expect(SchedulesList).toHaveBeenLastCalledWith(
      {
        isLoading: false,
        isError: false,
        schedulesList: schedulesMock,
        onCardClick: onCardClickSpy,
        onButtonClick: "button click function",
      },
      {}
    );
  });
});
