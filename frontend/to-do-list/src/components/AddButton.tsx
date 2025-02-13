import { IoIosAdd } from "react-icons/io";

const AddButton = () => {
  return (
    <button className="rounded-xl bg-slate-800 hover:brightness-150 transition-all cursor-pointer shadow shadow-gray-800 p-4 w-full justify-items-center">
      <IoIosAdd size={48} />
    </button>
  );
};

export default AddButton;
