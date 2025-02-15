import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteTask from "../api/deleteTasks";

const useDeleteTask = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useDeleteTask;
