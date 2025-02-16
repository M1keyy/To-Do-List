import { useMutation, useQueryClient } from "@tanstack/react-query";
import addTask from "../api/addTasks";
import Task from "../interfaces/TaskInterface";

const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) =>
      addTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useAddTask;
