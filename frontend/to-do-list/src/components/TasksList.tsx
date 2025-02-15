import Task from "../interfaces/TaskInterface";
import Card from "./Card";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { data: tasks, error, isLoading } = useTasks();

  console.log(tasks);

  if(isLoading) return <div className="text-2xl">Loading...</div>
  if(error) return <div className="text-2xl">{error.message}</div>

  return (
    <>
      {tasks?.map((task: Task) => (
        <Card
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          createdAt={task.createdAt}
          updatedAt={task.updatedAt}
        />
      ))}
    </>
  );
};

export default TaskList;
