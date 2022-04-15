import { ScheduleId } from "../types/schedules";

export const schedulesEndpoint = "http://localhost:3000/schedules";
export const schedulesLogsEndpoint = "http://localhost:3000/scheduleLogs";

export const fetcher = (resource: RequestInfo, init: RequestInit | undefined) =>
  fetch(resource, init).then((res) => res.json());

export const getKeySchedule = ({ id }: { id: ScheduleId }) =>
  `${schedulesEndpoint}/${id}`;
