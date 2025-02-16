import Task from "../interfaces/TaskInterface";
import fetcher from "../utils/fetcher";

const editTask = (task: Omit<Task, "createdAt" | "updatedAt">) =>
  fetcher(`/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export default editTask;
