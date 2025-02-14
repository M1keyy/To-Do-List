import Task from "../interfaces/TaskInterface";
import Card from "./Card";
import { useTasks } from "../hooks/useTasks";

const TaskList = () => {
  const { data: tasks, isLoading } = useTasks();

  console.log(tasks);

  if(isLoading) return <div>Loading...</div>

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
