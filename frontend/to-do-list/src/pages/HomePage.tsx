import AddButton from "../components/AddButton";
import TaskList from "../components/TasksList";
import useAddTask from "../hooks/useAddTask";

const HomePage = () => {
  const { mutateAsync: addTaskMutation } = useAddTask({
    title: "TEST DESDE FRONT",
    status: "pending",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga qui quis ipsa quibusdam consectetur impedit natus exercitationem assumenda corrupti. Nisi, numquam quaerat maiores nesciunt corporis autem beatae facere? Rerum, et.",
  });

  return (
    <>
      <div className="flex flex-col gap-4 p-4 items-center mx-auto max-w-3xl pb-12">
        <h1 className="font-bold font-mono text-5xl p-4 pt-10 w-full">
          To-Do List
        </h1>
        <AddButton onClick={() => addTaskMutation()} />
        <TaskList />
      </div>
    </>
  );
};

export default HomePage;
