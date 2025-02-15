import fetcher from "../utils/fetcher";

const deleteTask = (id: string) => fetcher(`/tasks/${id}`, { method: "DELETE" });

export default deleteTask;