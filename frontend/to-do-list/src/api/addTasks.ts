import Task from "../interfaces/TaskInterface";
import fetcher from "../utils/fetcher";

const addTask = (task: Omit<Task, "id" | "createdAt" | "updatedAt">) =>
  fetcher("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export default addTask;
