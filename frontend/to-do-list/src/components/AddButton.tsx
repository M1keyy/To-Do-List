import { IoIosAdd } from "react-icons/io";

const AddButton = (props: { onClick?: () => void }) => {
  return (
    <button onClick={props.onClick} className="rounded-xl bg-slate-800 hover:brightness-150 active:brightness-200 transition-all cursor-pointer shadow shadow-gray-800 p-4 w-full justify-items-center">
      <IoIosAdd size={48} />
    </button>
  );
};

export default AddButton;
