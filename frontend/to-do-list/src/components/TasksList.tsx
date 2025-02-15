import Card from "./Card";
import { useTasks } from "../hooks/useTasks";
import Task from "../interfaces/TaskInterface";
import { useMemo } from "react";

const TaskList = () => {
  const { data: tasks, error, isLoading } = useTasks();

  // Para que las tareas se muestren de la más nueva a la más antigua
  // useMemo para que no se vuelva a repetir el reverse()
  const tasksReverse: Task[] | undefined = useMemo(
    () => (tasks?.reverse()),
    [tasks]
  );

  if (isLoading) return <div className="text-2xl">Loading...</div>;
  if (error) return <div className="text-2xl">{error.message}</div>;

  return (
    <>
      {tasksReverse?.map((task) => (
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
