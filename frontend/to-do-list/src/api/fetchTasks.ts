import { API_URL } from "../configs/envConfig";

const fetchTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  if (!res.ok) throw new Error("Error al obtener las tareas");
  return res.json();
};

export default fetchTasks;
