import { useMutation, useQueryClient } from "@tanstack/react-query";
import addTask from "../api/addTasks";
import Task from "../interfaces/TaskInterface";

const useAddTask = (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => addTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useAddTask;
