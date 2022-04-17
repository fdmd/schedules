import { act, renderHook } from "@testing-library/react-hooks";

import { useFilterSchedule } from "../hooks";
import {
  scheduleLogsMock,
  schedulesMock,
} from "../../../common/__mocks__/schedules";

describe("Homepage hooks behaviour", () => {
  let renderUseFilterSchedule: any;
  let eventMock: any;

  beforeEach(() => {
    renderUseFilterSchedule = renderHook(() =>
      useFilterSchedule({ dataScheduleLogs: scheduleLogsMock })
    );
    eventMock = {
      target: { tagName: "DIV" },
      currentTarget: { contains: () => true },
    };
  });

  test("initialized without filter", () => {
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual(
      scheduleLogsMock
    );
  });

  test("filter by card", () => {
    act(() => {
      renderUseFilterSchedule.result.current.onCardClick({
        id: schedulesMock[0].id,
      })(eventMock);
    });
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual([
      scheduleLogsMock[0],
    ]);
  });

  test("filter by card, no results", () => {
    act(() => {
      renderUseFilterSchedule.result.current.onCardClick({
        id: schedulesMock[2].id,
      })(eventMock);
    });
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual([]);
  });

  test("click on a card then click outside to reset", () => {
    act(() => {
      renderUseFilterSchedule.result.current.onCardClick({
        id: schedulesMock[1].id,
      })(eventMock);
    });
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual([
      scheduleLogsMock[1],
    ]);

    eventMock.currentTarget.contains = () => false;
    const event = new Event("click");
    act(() => {
      document.dispatchEvent(event);
    });
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual(
      scheduleLogsMock
    );
  });
  test("clicking button does not filter", () => {
    eventMock.target.tagName = "BUTTON";
    act(() => {
      renderUseFilterSchedule.result.current.onCardClick({
        id: schedulesMock[0].id,
      })(eventMock);
    });
    expect(renderUseFilterSchedule.result.current.filteredLogs).toEqual(
      scheduleLogsMock
    );
  });
});
