import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../api/fetchTasks";

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};