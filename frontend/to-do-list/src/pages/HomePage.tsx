import AddButton from "../components/AddButton";
import TaskList from "../components/TasksList";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 items-center mx-auto max-w-3xl pb-12">
        <h1 className="font-bold font-mono text-5xl p-4 pt-10 w-full">To-Do List</h1>
        <AddButton />
        <TaskList />
      </div>
    </>
  );
};

export default HomePage;
