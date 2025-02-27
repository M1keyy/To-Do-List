import { useState } from "react";
import AddButton from "../components/AddButton";
import FormTask from "../components/FormTasks";
import TaskList from "../components/TasksList";
import useAddTask from "../hooks/useAddTask";

const HomePage = () => {

  const [open, setOpen] = useState<boolean>(false);

  const { mutateAsync: addTaskMutation } = useAddTask();
  
  return (
    <>
      <div className="flex flex-col gap-4 p-4 items-center mx-auto max-w-3xl pb-12">
        <h1 className="font-bold font-mono text-5xl p-4 pt-10 w-full">
          To-Do List
        </h1>
        <AddButton onClick={() => setOpen(true)} />
        <FormTask open={open} onClose={() => setOpen(false)} mutationFn={addTaskMutation} />
        <TaskList />
      </div>
    </>
  );
};

export default HomePage;