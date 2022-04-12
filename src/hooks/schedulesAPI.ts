import useSWR from "swr";

export const useSchedules = () => {
  const { data, error } = useSWR("http://localhost:3000/schedules");

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useScheduleLogs = () => {
  const { data, error } = useSWR("http://localhost:3000/scheduleLogs");

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
