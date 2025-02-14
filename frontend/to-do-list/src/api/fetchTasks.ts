import fetcher from "../utils/fetcher";

const fetchTasks = () => fetcher("/tasks");

export default fetchTasks;