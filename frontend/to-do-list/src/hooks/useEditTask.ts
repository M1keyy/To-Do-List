import { useMutation, useQueryClient } from "@tanstack/react-query";
import editTask from "../api/editTasks";
import Task from "../interfaces/TaskInterface";

const useEditTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: Omit<Task, "createdAt" | "updatedAt">) => editTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useEditTask;
