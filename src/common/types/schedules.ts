export type ScheduleId = number;

export type Date = string;

export interface Schedule {
  id: ScheduleId;
  name: string;
  description: string;
  isRetired: boolean;
  tasksCount: boolean;
  startPoint: Date;
  endPoint: Date;
  dayOfWeek: number;
  dayOfMonth: number;
  startDate: Date;
  endDate: Date;
  intervalType: string;
  timePeriod: number;
}

export interface ScheduleLog {
  id: number;
  startTime: Date;
  endTime: Date;
  status: string;
  serverName: string;
  scheduleId: ScheduleId;
}
