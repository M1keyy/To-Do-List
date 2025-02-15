import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../api/fetchTasks";
import Task from "../interfaces/TaskInterface";

export const useTasks = () => {
  return useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};